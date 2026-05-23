export async function shopifyFetch({ query, variables = {} }: { query: string; variables?: any }) {
  const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!key) {
    throw new Error("Missing Shopify Access Token in .env.local");
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': key,
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
}