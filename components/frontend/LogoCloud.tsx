import React from "react";
import { Shield, Award, BookOpen, GraduationCap, School } from "lucide-react";

export default function LogoCloud() {
  const partners = [
    {
      name: "EduTrust Academy",
      logo: (
        <div className="flex items-center space-x-2 font-bold text-blue-600">
          <GraduationCap size={24} />
          <span>EduTrust</span>
        </div>
      ),
    },
    {
      name: "SmartSchool International",
      logo: (
        <div className="flex items-center space-x-2 font-bold text-emerald-600">
          <School size={24} />
          <span>SmartSchool</span>
        </div>
      ),
    },
    {
      name: "Global Learning Solutions",
      logo: (
        <div className="flex items-center space-x-2 font-bold text-purple-600">
          <BookOpen size={24} />
          <span>GlobalLearn</span>
        </div>
      ),
    },
    {
      name: "Elite Education Systems",
      logo: (
        <div className="flex items-center space-x-2 font-bold text-red-600">
          <Award size={24} />
          <span>EliteEdu</span>
        </div>
      ),
    },
    {
      name: "SecureEd Solutions",
      logo: (
        <div className="flex items-center space-x-2 font-bold text-indigo-600">
          <Shield size={24} />
          <span>SecureEd</span>
        </div>
      ),
    },
    {
      name: "Modern Academics",
      logo: (
        <div className="flex items-center space-x-2 font-bold text-orange-600">
          <School size={24} />
          <span>ModernAcad</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold leading-8 text-gray-900">
            Trusted by Leading Educational Institutions
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Empowering schools worldwide with comprehensive management solutions
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="col-span-1 flex justify-center transform transition-transform hover:scale-105"
            >
              <div className="group relative">
                {partner.logo}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-x-6 lg:gap-x-12">
          <div className="flex items-center gap-x-2">
            <div className="h-px w-8 bg-gray-200" />
            <p className="text-sm leading-6 text-gray-600">
              Supporting {partners.length}+ educational institutions
            </p>
            <div className="h-px w-8 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
