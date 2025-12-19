// src/app/components/Hero.tsx
import Antigravity from "@/components/Antigravity";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Antigravity Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={600}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.5}
          lerpSpeed={0.05}
          color={"#155dfc"}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <h1 className="text-4xl text-white md:text-6xl font-bold leading-tight">
          Empowering Businesses with{" "}
          <span className="text-blue-600">Smart Digital Solutions</span>
        </h1>

        <p className="mt-6 text-lg text-white">
          We help startups and enterprises build scalable, secure, and high-performance
          web applications using modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border text-white border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition hover:text-black">
            Contact Us
          </button>
        </div>
      </div>

    </section>
  );
}
