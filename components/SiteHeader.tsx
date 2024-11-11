"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DollarSign,
  Menu,
  Users,
  GraduationCap,
  MessageSquare,
  Bus,
  BookOpen,
  BarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Complete student information system for managing enrollments, profiles, academic records, attendance tracking, and behavioral records",
    href: "/modules/student-management",
    features: [
      "Student Registration & Enrollment",
      "Student Profiles & Records",
      "Academic History Tracking",
      "Attendance Management",
      "Behavioral Records",
      "Document Management",
      "Health Records",
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic Management",
    description:
      "Comprehensive academic operations system for curriculum planning, examinations, grading, and educational resource management",
    href: "/modules/academic-management",
    features: [
      "Curriculum Planning",
      "Class Scheduling & Timetables",
      "Examination Management",
      "Grading System",
      "Report Card Generation",
      "Assignment Management",
      "Academic Calendar",
    ],
  },
  {
    icon: Users,
    title: "Staff Management",
    description:
      "Integrated system for managing teaching and non-teaching staff, including attendance, performance, and professional development",
    href: "/modules/staff-management",
    features: [
      "Staff Profiles & Records",
      "Attendance Tracking",
      "Performance Evaluation",
      "Leave Management",
      "Professional Development",
      "Substitute Management",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description:
      "Centralized communication platform for school-wide notifications, announcements, and parent-teacher interaction",
    href: "/modules/communication",
    features: [
      "Multi-Channel Messaging",
      "Email & SMS Integration",
      "Digital Notice Board",
      "Parent-Teacher Communication",
      "Event Announcements",
      "Emergency Alerts",
    ],
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description:
      "Complete financial management system for fee collection, expenses, scholarships, and budgeting",
    href: "/modules/finance",
    features: [
      "Fee Management",
      "Online Payment Processing",
      "Invoice Generation",
      "Scholarship Management",
      "Expense Tracking",
      "Budget Planning",
      "Financial Reports",
    ],
  },
  {
    icon: Bus,
    title: "Transport Management",
    description:
      "Comprehensive transport system for route planning, vehicle tracking, and ensuring student safety",
    href: "/modules/transport",
    features: [
      "Route Planning",
      "GPS Tracking",
      "Driver Management",
      "Vehicle Maintenance",
      "Transport Attendance",
      "Safety Alerts",
      "Parent Notifications",
    ],
  },
  {
    icon: BookOpen,
    title: "Resource Management",
    description:
      "Efficient management of school resources including library, inventory, and facilities",
    href: "/modules/resources",
    features: [
      "Library Management",
      "Inventory Control",
      "Facility Scheduling",
      "Asset Tracking",
      "Resource Booking",
      "Maintenance Scheduling",
    ],
  },
  {
    icon: BarChart2,
    title: "Analytics & Reports",
    description:
      "Advanced analytics and reporting tools for data-driven decision making and performance monitoring",
    href: "/modules/analytics",
    features: [
      "Performance Analytics",
      "Attendance Reports",
      "Financial Analytics",
      "Custom Report Builder",
      "Compliance Reports",
      "Trend Analysis",
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto  flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo variant="light" />
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <h4 className="text-lg font-medium">Features</h4>
                      <Link
                        href="/features"
                        className="text-sm text-violet-500 hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {features.map((feature, index) => (
                        <Link
                          key={index}
                          href={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                              <feature.icon className="h-6 w-6 text-violet-500" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1 group-hover:text-violet-500">
                                {feature.title}
                              </h5>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium mb-1">Get started</h4>
                          <p className="text-sm text-muted-foreground">
                            Their food sources have decreased, and their numbers
                          </p>
                        </div>
                        <Button asChild variant="secondary">
                          <Link href="/contactUs">Get started</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col py-4">
              <Link
                href="/"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <button
                className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Features
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    showFeatures && "rotate-180"
                  )}
                />
              </button>
              {showFeatures && (
                <div className="px-4 py-2 space-y-4">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-4 py-2"
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 bg-muted rounded-md">
                        <feature.icon className="h-6 w-6 text-violet-500" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="#pricing"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#how-it-works"
                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                How it Works
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Button>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Sign up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
