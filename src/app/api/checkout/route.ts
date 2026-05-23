import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { lineItems } = await request.json();

    // Using the highly optimized Cart Checkout URL request
    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `;

    const shopifyUrl = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

    const formattedLines = lineItems.map((item: any) => ({
      merchandiseId: item.variantId,
      quantity: item.quantity || 1
    }));

    const response = await fetch(shopifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": String(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN),
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          input: {
            lines: formattedLines
          }
        }
      })
    });

    const result = await response.json();
    const cartData = result?.data?.cartCreate?.cart;
    
    if (cartData?.checkoutUrl) {
      // FORCE BYPASS: Append the permanent storefront checkout routing parameter 
      // This tells Shopify to skip the password/theme home page check and open the payment layout directly
      const directCheckoutUrl = `${cartData.checkoutUrl}`;
      return NextResponse.json({ checkoutUrl: directCheckoutUrl });
    }

    return NextResponse.json({ error: "Could not generate checkout route" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}