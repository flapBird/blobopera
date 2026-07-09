"use client";

/**
 * SchemaMarkup injects a JSON-LD script tag for structured data.
 * Use on the homepage with buildVideoGameJsonLd().
 */
export default function SchemaMarkup({ jsonLd }: { jsonLd: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
