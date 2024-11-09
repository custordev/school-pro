import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="bg-violet-500 rounded-full p-1">
        <span className="text-white font-bold text-xl">
          <GraduationCap />
        </span>
      </div>
      <span className="font-bold text-xl">
        School <span className="text-violet-600">Pro</span>
      </span>
    </Link>
  );
}
