import {
  Sparkles,
  GraduationCap,
  Users,
  Calendar,
  Clock,
  ChartBar,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function GridFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            <Sparkles className="mr-2 h-4 w-4 text-indigo-500" />
            <span className="text-gray-600">Top Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Revolutionize the way you manage education.
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform automates complex administrative tasks, allowing you to
            focus on what matters most - delivering quality education.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
          {/* Student Management Card */}
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <GraduationCap className="h-12 w-12 text-indigo-500" />
              <h3 className="mt-4 text-xl font-bold">Student Management</h3>
              <p className="mt-2 text-gray-500">
                Efficiently manage student records, attendance, and academic
                performance with AI-driven tools that enhance administrative
                productivity.
              </p>
              <div className="mt-6">
                <Image
                  src="/images/D.png"
                  alt="Student Management Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg border border-gray-200 object-cover"
                />
              </div>
            </div>
          </div>
          {/* Academic Planning Card */}
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <BookOpen className="h-12 w-12 text-indigo-500" />
              <h3 className="mt-4 text-xl font-bold">Academic Planning</h3>
              <p className="mt-2 text-gray-500">
                Create and manage curriculum, class schedules, and learning
                resources with our intuitive planning tools.
              </p>
              <div className="mt-6">
                <Image
                  src="/images/t.png"
                  alt="Academic Planning Interface"
                  width={600}
                  height={400}
                  className="rounded-lg border border-gray-200 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Additional Features Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-start space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <Users className="h-10 w-10 text-indigo-500" />
            <h3 className="text-lg font-bold">Staff Management</h3>
            <p className="text-sm text-gray-500">
              Streamline HR processes and staff scheduling with automated tools.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <Calendar className="h-10 w-10 text-indigo-500" />
            <h3 className="text-lg font-bold">Event Planning</h3>
            <p className="text-sm text-gray-500">
              Organize school events, parent meetings, and activities
              effortlessly.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <Clock className="h-10 w-10 text-indigo-500" />
            <h3 className="text-lg font-bold">Attendance Tracking</h3>
            <p className="text-sm text-gray-500">
              Monitor student and staff attendance in real-time with detailed
              reporting.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <ChartBar className="h-10 w-10 text-indigo-500" />
            <h3 className="text-lg font-bold">Performance Analytics</h3>
            <p className="text-sm text-gray-500">
              Track academic progress and generate comprehensive performance
              reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
