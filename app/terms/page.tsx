import EmailLink from "@/components/EmailLink";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using Blob Opera — read about acceptable use, intellectual property, and liability when playing free online music games.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms &amp; Conditions">
      <p className="text-sm text-text-dark/50 mb-6">
        These terms govern your use of {siteConfig.siteName} (
        {siteConfig.domain}). By using this site, you agree to the
        conditions outlined below. If you do not agree, please discontinue
        use.
      </p>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing and using <strong>{siteConfig.siteName}</strong> (
          <strong>{siteConfig.domain}</strong>) — including playing Blob
          Opera — you agree to be bound by these Terms &amp; Conditions. If
          you do not agree to all of these terms, please do not use this
          site.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          2. Use of the Site
        </h2>
        <p>
          {siteConfig.siteName} provides free browser-based music games and
          entertainment for personal, non-commercial use. You agree to use
          the site lawfully and not to engage in any activity that disrupts,
          damages, or interferes with the site&apos;s operation or other
          users&apos; experience. Automated access, scraping, and data
          harvesting without prior written permission are prohibited.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Intellectual Property
        </h2>
        <p>
          Blob Opera is an original creation by David Li in collaboration
          with Google Arts & Culture. The game, its name, visual design,
          characters, audio technology, and all associated trademarks and
          copyrights belong to their respective owners.{" "}
          {siteConfig.siteName} does not claim ownership of any third-party
          game content. {siteConfig.game.sourceAttribution}.
        </p>
        <p className="mt-3">
          The website design, original written content, layout, and
          compilation of {siteConfig.siteName} are protected by copyright.
          Unauthorized reproduction, distribution, or modification of our
          original content is prohibited.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Third-Party Content
        </h2>
        <p>
          This site contains embedded content from Google Arts & Culture,
          which hosts the Blob Opera game. We are not responsible for the
          content, functionality, availability, or data practices of
          third-party services. Use of third-party content is subject to
          the respective provider&apos;s terms of service and privacy
          policies.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Disclaimer of Warranties
        </h2>
        <p>
          {siteConfig.siteName} is provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, express or implied.
          We do not guarantee that the site will be uninterrupted, secure,
          error-free, or that the embedded Blob Opera game will be available
          at all times. Game availability depends on third-party hosts and
          may change without notice.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          6. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.siteName} and
          its operators shall not be liable for any direct, indirect,
          incidental, consequential, or special damages arising from your
          use of or inability to use this site, including but not limited
          to loss of data or access to embedded games.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          7. Changes to Terms
        </h2>
        <p>
          We reserve the right to update or modify these Terms &amp;
          Conditions at any time. Changes take effect immediately upon
          posting to this page. Your continued use of the site after any
          changes constitutes your acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          8. Contact
        </h2>
        <p>
          For questions about these Terms &amp; Conditions, please contact
          us at{" "}
          <EmailLink email={siteConfig.contact.email} className="text-primary underline">
            {siteConfig.contact.email}
          </EmailLink>
          .
        </p>
      </section>
    </LegalPage>
  );
}
