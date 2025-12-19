import Shuffle from "./Shuffle";

// src/app/components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
            <Shuffle
  text=" Ready to Build Your Next Digital Product?"
  shuffleDirection="right"
  duration={2.95}
  animationMode="evenodd"
  shuffleTimes={10}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
/>
        </h2>
         

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Partner with us to transform your ideas into scalable, high-quality software solutions.
        </p>

        <div className="mt-8">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
