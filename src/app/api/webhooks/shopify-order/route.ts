import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const shopifyOrder = await request.json();

    // 1. Extract necessary data from Shopify payload
    const orderNumber = shopifyOrder.order_number || shopifyOrder.id;
    const customerEmail = shopifyOrder.email;
    const shippingAddress = shopifyOrder.shipping_address;
    const firstItem = shopifyOrder.line_items?.[0];

    if (!shippingAddress || !firstItem) {
      return NextResponse.json({ error: "Missing vital order data" }, { status: 400 });
    }

    // 2. Map payload into a "Blind Shipping" format for the supplier's API
    const supplierPayload = {
      external_order_id: `KNDS-${orderNumber}`,
      sku: firstItem.sku || "STANDARD-CARBON-CORE",
      quantity: firstItem.quantity || 1,
      shipping_destination: {
        consignee_name: shippingAddress.name,
        address_line1: shippingAddress.address1,
        address_line2: shippingAddress.address2 || "",
        city: shippingAddress.city,
        state_province: shippingAddress.province,
        postal_code: shippingAddress.zip,
        country_code: shippingAddress.country_code,
        phone: shippingAddress.phone || ""
      },
      // CRITICAL WHITE-LABEL RULE FOR THE SUPPLIER
      fulfillment_instructions: "BLIND SHIP ONLY. REMOVE ALL CHINESE INVOICES, PRICE TAGS, LOGOS, OR CARDS. USE US-SPEC DISPATCH PACKAGING."
    };

    // 3. Forward to Supplier API (or automation middleware like Make/Zapier)
    // Replace with your supplier's actual API endpoint when ready
    const supplierResponse = await fetch("https://api.fulfillment-partner.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.SUPPLIER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(supplierPayload)
    });

    if (!supplierResponse.ok) {
      console.error("Supplier routing failed:", await supplierResponse.text());
      // We still return a 200 to Shopify so it doesn't spam retries, but we log the error internally
    }

    return NextResponse.json({ success: true, logged_order: orderNumber });
  } catch (error: any) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}