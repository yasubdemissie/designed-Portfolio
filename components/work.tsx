import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-main relative overflow-hidden">
      {/* Main Content */}
      <main className="px-8 py-16">
        {/* WORKS Title */}
        <div className="flex gap-1 mb-8">
          {["W", "O", "R", "K", "S"].map((letter, index) => {
            if (index % 2 == 0)
              return (
                <div
                  key={index}
                  className="w-12 h-12 bg-custom-accent-dark flex items-center justify-center text-white font-bold text-lg transform -rotate-4 origin-center"
                >
                  {letter}
                </div>
              );
            return (
              <div
                key={index}
                className="w-12 h-12 bg-custom-accent-light flex items-center justify-center text-white font-bold text-lg transform -rotate-4 origin-center"
              >
                {letter}
              </div>
            );
          })}
        </div>

        {/* Some Design Works */}
        <div className="text-right mb-8">
          <p className="text-gray-600 text-lg">Some Design Works</p>
        </div>

        {/* Project Showcase */}
        <div className="flex items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              E-commerce app
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I led the complete design lifecycle, from initial concept through
              to execution, encompassing responsive design, UI, and UX. This
              included key components like the login, navigation, and
              administrative pages.
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center gap-2 bg-transparent"
              >
                Case study
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                Mockup
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Green Background with Mobile Mockups */}
          <div className="flex-1 relative">
            <div className="bg-green-600 rounded-2xl p-12 min-h-[500px] relative overflow-hidden">
              {/* Mobile App Mockup */}
              <div className="absolute right-8 top-8 w-64 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* App content mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <div className="flex-1 h-8 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-gray-200 rounded-lg"></div>
                      <div className="aspect-square bg-gray-200 rounded-lg"></div>
                      <div className="aspect-square bg-gray-200 rounded-lg"></div>
                      <div className="aspect-square bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* See more overlay */}
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span className="font-medium">See more</span>
                </div>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-8 right-8 text-white">
                <p className="text-sm">see more about the project</p>
              </div>

              {/* Background decorative elements */}
              <div className="absolute left-8 bottom-8 w-16 h-16 bg-green-700 rounded-full opacity-50"></div>
              <div className="absolute top-16 left-16 w-8 h-8 bg-green-700 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
