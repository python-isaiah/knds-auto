import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { lineItems } = await request.json();

    // Modern Shopify Storefront Cart Creation Mutation Payload
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

    // Connect using your secure public environment variables
    const shopifyUrl = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

    // Map your line items to match the modern 'merchandiseId' format Shopify expects
    const formattedLines = lineItems.map((item: any) => ({
      merchandiseId: item.variantId, // Shopify expects the variant GID here
      quantity: item.quantity || 1,
    }));

    const response = await fetch(shopifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": String(
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        ),
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          input: {
            lines: formattedLines,
          },
        },
      }),
    });

    const result = await response.json();

    // Print raw payload directly into your local terminal console for verification
    console.log("=== RAW SHOPIFY CART API RESPONSE ===");
    console.log(JSON.stringify(result, null, 2));
    console.log("=====================================");

    // Check for top-level GraphQL query system errors
    if (result?.errors && result.errors.length > 0) {
      return NextResponse.json(
        { error: result.errors[0].message },
        { status: 400 },
      );
    }

    const cartData = result?.data?.cartCreate?.cart;
    const userErrors = result?.data?.cartCreate?.userErrors;

    // Check for validation errors (e.g. invalid variant IDs)
    if (userErrors && userErrors.length > 0) {
      return NextResponse.json(
        { error: userErrors[0].message },
        { status: 400 },
      );
    }

    // Return the modern checkoutUrl back to your front-end script
    return NextResponse.json({ checkoutUrl: cartData?.checkoutUrl });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
