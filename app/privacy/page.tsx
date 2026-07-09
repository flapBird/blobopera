import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Blob Opera privacy policy — learn how we handle your data, cookies, and third-party services when you play free online music games on our site.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-sm text-text-dark/50 mb-6">
        At {siteConfig.siteName} we take your privacy seriously. This policy
        explains what information we collect when you visit {siteConfig.domain},
        how we use it, and your rights regarding your data.
      </p>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p>
          When you visit <strong>{siteConfig.siteName}</strong> (
          <strong>{siteConfig.domain}</strong>) to play Blob Opera, we may
          collect certain information automatically through standard web
          server logs, including your IP address, browser type, operating
          system, referring URLs, and the pages you visit. This data helps
          us understand how visitors use the site and improve the
          experience.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          2. Cookies
        </h2>
        <p>
          Our site may use cookies and similar technologies to enhance your
          browsing experience and analyze site traffic. You can configure
          your browser to refuse all cookies or alert you when cookies are
          being sent. Note that disabling cookies may affect how certain
          features function, including the embedded Blob Opera game.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Third-Party Services
        </h2>
        <p>
          The Blob Opera game embedded on {siteConfig.siteName} is hosted by
          Google Arts & Culture, a third-party provider. When you interact
          with the embedded game, Google may collect data according to its
          own privacy policy. We do not control the data collection
          practices of third-party game hosts, and we encourage you to
          review the privacy policy of Google Arts & Culture for more
          information.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Children&apos;s Privacy
        </h2>
        <p>
          {siteConfig.siteName} does not knowingly collect personal
          information from children under the age of 13. Blob Opera is a
          family-friendly music game rated for everyone. If you believe a
          child has provided us with personal data, please contact us
          immediately so we can take appropriate action.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or for legal and regulatory reasons.
          Changes will be posted on this page with an updated &quot;Last
          updated&quot; date. Your continued use of the site after changes
          are posted constitutes acceptance of the revised policy.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          6. Contact
        </h2>
        <p>
          If you have questions about this Privacy Policy, how your data is
          handled, or would like to exercise your data protection rights,
          please contact us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-primary underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
