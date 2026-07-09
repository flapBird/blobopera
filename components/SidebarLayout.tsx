import { siteConfig } from "@/lib/site.config";
import AdSlot from "./AdSlot";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center gap-8">
        {/* Left sidebar ad — hidden below xl if ads disabled */}
        {siteConfig.ads.enabled && (
          <aside className="hidden xl:flex flex-col gap-6 flex-shrink-0">
            <AdSlot type="sidebar" />
          </aside>
        )}

        {/* Main content */}
        <div className="flex-1 max-w-5xl min-w-0">{children}</div>

        {/* Right sidebar ads — hidden below xl if ads disabled */}
        {siteConfig.ads.enabled && (
          <aside className="hidden xl:flex flex-col gap-6 flex-shrink-0">
            <AdSlot type="sidebar" />
            <AdSlot type="rectangle" />
          </aside>
        )}
      </div>
    </div>
  );
}
