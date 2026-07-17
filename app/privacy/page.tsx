import EmailLink from "@/components/EmailLink";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Blob Opera privacy policy — learn how we handle your data, cookies, advertising, and third-party services when you play free online music games on our site.",
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
          browsing experience, analyze site traffic, and serve relevant
          advertisements. You can configure your browser to refuse all
          cookies or alert you when cookies are being sent. Note that
          disabling cookies may affect how certain features function,
          including the embedded Blob Opera game.
        </p>
        <p className="mt-3">
          Third-party vendors, including Google, use cookies to serve ads
          based on a user&apos;s prior visits to this site or other sites.
          Google&apos;s use of advertising cookies enables it and its
          partners to serve ads to users based on their visit to this site
          and/or other sites on the Internet.
        </p>
        <p className="mt-3">
          Users may opt out of personalized advertising by visiting
          Google&apos;s{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Ads Settings
          </a>
          . You may also opt out of third-party vendor cookies used for
          interest-based advertising through the{" "}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Network Advertising Initiative opt-out page
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Third-Party Services
        </h2>
        <p>
          <strong>Google Analytics.</strong> We use Google Analytics to
          understand how visitors use the site. Google Analytics collects
          information such as how often users visit, what pages they visit,
          and what other sites they used prior to coming to this site. We
          use the information to improve the site experience. Google
          Analytics collects only the IP address assigned to you on the
          date you visit, not your name or other identifying information.
          You can learn more by visiting{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          or opt out of Google Analytics by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>
        <p className="mt-3">
          <strong>Google AdSense.</strong> We use Google AdSense to display
          advertisements on the site. Google AdSense uses cookies, web
          beacons, and similar tracking technologies to serve ads relevant
          to your interests and to measure ad performance. For more
          information about how Google uses data when you use this site,
          visit{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            How Google uses information from sites or apps that use our services
          </a>
          .
        </p>
        <p className="mt-3">
          <strong>Google Arts &amp; Culture (Embedded Game).</strong> The
          Blob Opera game embedded on {siteConfig.siteName} is hosted by
          Google Arts &amp; Culture, a third-party provider. When you
          interact with the embedded game, Google may collect data
          according to its own privacy policy. We do not control the data
          collection practices of third-party game hosts, and we encourage
          you to review the privacy policy of Google Arts &amp; Culture for
          more information.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Advertising and Google AdSense
        </h2>
        <p>
          This site uses Google AdSense, a service provided by Google LLC
          (&ldquo;Google&rdquo;). AdSense allows us to display
          advertisements from Google and its advertising partners.
        </p>
        <p className="mt-3">
          <strong>How AdSense works with your data.</strong> When you visit
          this site, Google AdSense may use cookies, web beacons, and other
          identifiers to collect information about your browsing activity.
          This information may include the pages you visit, the links you
          click, your IP address, browser type, device type, and the time
          of your visit. This data helps Google and its partners deliver
          ads that are more relevant to your interests (&ldquo;interest-based
          advertising&rdquo;), limit the number of times you see the same
          ad, and measure the effectiveness of ad campaigns.
        </p>
        <p className="mt-3">
          <strong>Your choices and opt-out.</strong> You can manage or opt
          out of personalized advertising from Google at any time by
          visiting Google&apos;s{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Ads Settings
          </a>
          . You may also opt out of third-party vendor cookies used for
          interest-based advertising through the{" "}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Network Advertising Initiative opt-out page
          </a>
          . Opting out of personalized advertising does not mean you will
          see fewer ads; it means the ads you see may be less relevant to
          your interests.
        </p>
        <p className="mt-3">
          <strong>Data sharing with Google.</strong> When ads are served on
          this site, Google may receive or collect information through
          cookies and other technologies. This information is handled in
          accordance with{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google&apos;s Privacy Policy
          </a>
          . We do not pass any personally identifiable information to
          Google through our AdSense implementation.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Children&apos;s Privacy
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
          6. Changes to This Policy
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
          7. Contact
        </h2>
        <p>
          If you have questions about this Privacy Policy, how your data is
          handled, or would like to exercise your data protection rights,
          please contact us at{" "}
          <EmailLink email={siteConfig.contact.email} className="text-primary underline">
            {siteConfig.contact.email}
          </EmailLink>
          .
        </p>
      </section>
    </LegalPage>
  );
}
