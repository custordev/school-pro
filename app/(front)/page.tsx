import { DashboardPreveiw } from "@/components/frontend/DashboardPreview";
import Hero from "@/components/frontend/Hero";
import LogoCloud from "@/components/frontend/LogoCloud";
import React from "react";

export default function page() {
  return (
    <main className=" ">
      <Hero />
      <LogoCloud />
      <DashboardPreveiw />
    </main>
  );
}
