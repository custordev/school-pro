import SiteHeader from "@/components/SiteHeader";
import React, { ReactNode } from "react";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
}
