"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCRIPT_SRC =
  "https://bauval.org/21/39777d486c9c0eb97a50749c996eba9e";
const CONTAINER_ID = "container-39777d486c9c0eb97a50749c996eba9e";

interface AdsterraNativeProps {
  className?: string;
}

export default function AdsterraNative({ className = "" }: AdsterraNativeProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // The loader fills the container only when it executes, so re-add it after
    // client-side navigation instead of relying on a full page reload.
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, [pathname]);

  return (
    <div className={`w-full overflow-hidden ${className}`.trim()}>
      <div id={CONTAINER_ID} ref={containerRef} />
    </div>
  );
}
