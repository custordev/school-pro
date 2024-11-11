"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = 299;
  const annualPrice = 2990;

  const features = [
    "Student Information System",
    "Attendance Tracking",
    "Grade Management",
    "Parent-Teacher Communication",
    "Timetable Scheduling",
    "Online Learning Integration",
    "Financial Management",
    "Customizable Reports",
  ];

  return (
    <section
      id="#pricing"
      className="w-full py-24 sm:py-32 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <div className="inline-flex items-center rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            <Sparkles className="mr-2 h-4 w-4 text-violet-500" />
            <span className="text-violet-700">Pricing Plans</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your school. No hidden fees, no
            surprises.
          </p>
        </div>
        <div className="mx-auto mt-8 flex justify-center space-x-4">
          <Button
            variant={isAnnual ? "outline" : "default"}
            onClick={() => setIsAnnual(false)}
            className="w-24"
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
            className="w-24"
          >
            Annually
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              <span className="text-violet-500">School Pro</span>{" "}
              {isAnnual ? "Annual" : "Monthly"} Plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Empower your school with our comprehensive management solution.
              Streamline administration, enhance learning experiences, and
              foster better communication.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-violet-600">
                What is included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-violet-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual ? "Annual subscription" : "Monthly subscription"}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${isAnnual ? annualPrice : monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                  {!isAnnual && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                {isAnnual && (
                  <p className="mt-3 text-sm text-violet-600">
                    Save $598 per year
                  </p>
                )}
                <Button className="mt-10 w-full" size="lg">
                  Get started
                </Button>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
