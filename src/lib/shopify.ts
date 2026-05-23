// src/lib/shopify.ts

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain) {
  throw new Error("Missing Shopify Store Domain configuration");
}

if (!key) {
  throw new Error("Missing Shopify Access Token in .env.local");
}

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

export async function shopifyFetch({ query, variables = {} }: { query: string; variables?: any }) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": String(key),
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
}