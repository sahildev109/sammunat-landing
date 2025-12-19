// src/app/components/HowItWorks.tsx
const steps = [
  {
    step: "01",
    title: "Share Your Idea",
    description:
      "Tell us about your goals, requirements, and vision for the product.",
  },
  {
    step: "02",
    title: "We Build the Solution",
    description:
      "Our team designs and develops a scalable and efficient solution.",
  },
  {
    step: "03",
    title: "Launch & Scale",
    description:
      "We help you launch smoothly and scale as your business grows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It Works
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          A simple, transparent, and effective process from start to finish.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <span className="text-blue-600 font-bold text-lg">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
