"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16">
        {/* Logo + site name */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/favicon.png" alt="" className="w-8 h-8" />          <span className="font-heading font-bold text-lg text-text-dark group-hover:text-primary transition-colors">
            {siteConfig.siteName}
          </span>
        </Link>
      </div>
    </header>
  );
}
