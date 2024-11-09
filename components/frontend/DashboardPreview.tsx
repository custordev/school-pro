import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function DashboardPreveiw() {
  return (
    <div className="bg-white py-8 sm:py-32 shadow-md">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full">
          <CardContent className="mt-4">
            <Image
              width={1280}
              height={800}
              className="w-full"
              src="/images/dashboard.avif"
              alt="Dashboard Preview"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
