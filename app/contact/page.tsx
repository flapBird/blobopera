import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the Blob Opera team. Send feedback, report issues, or inquire about partnerships and advertising.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>

      <p className="text-text-dark/70 leading-relaxed mb-5">
        Have feedback about {siteConfig.siteName}, found a bug with the
        game embed, or want to discuss a partnership? We would love to hear
        from you.
      </p>

      <p className="text-text-dark/70 leading-relaxed mb-8">
        We aim to respond to all inquiries within 48 hours. Whether it is a
        suggestion for improving the site, a technical issue that needs
        attention, or an advertising or collaboration opportunity — drop us
        a line and we will get back to you.
      </p>

      {/* Email contact */}
      <div className="bg-surface rounded-xl p-6 border border-gray-100">
        <p className="text-sm text-text-dark/60 mb-2">
          Send your message to:
        </p>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-primary font-medium text-lg hover:underline"
        >
          {siteConfig.contact.email}
        </a>
      </div>

      <div className="mt-10 space-y-3 text-sm text-text-dark/50">
        <p>
          <strong className="text-text-dark/70">Common topics we handle:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bug reports or site performance issues</li>
          <li>Game removal or attribution requests</li>
          <li>Advertising and partnership inquiries</li>
          <li>General feedback and suggestions</li>
        </ul>
        <p className="pt-2">
          Please include as much detail as possible so we can help you
          quickly. For bug reports, mention your browser and device type.
        </p>
      </div>
    </div>
  );
}
