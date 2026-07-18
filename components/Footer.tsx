import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-dark/50 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-center space-y-1">
          <p className="text-xs text-text-dark/40">
            Blob Opera is a creation of{" "}
            <a
              href="https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dark/50 hover:text-primary transition-colors underline"
            >
              David Li &amp; Google Arts &amp; Culture
            </a>
            .
          </p>
          <p className="text-xs text-text-dark/30">
            This is an independent fan site. We are not affiliated with or
            endorsed by Google LLC or David Li.
          </p>
        </div>
      </div>
    </footer>
  );
}
