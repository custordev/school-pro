import { Sparkles } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <Badge className="inline-flex items-center rounded-full border border-gray-200 bg-white text-black px-4 py-2 text-sm font-medium hover:text-white">
      <Sparkles className="mr-2 h-4 w-4 " />
      <span>{title}</span>
    </Badge>
  );
}
