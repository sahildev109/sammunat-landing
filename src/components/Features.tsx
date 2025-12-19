import Aurora from "./Aurora";
import BlurText from "./BlurText";

// src/app/components/Features.tsx
const features = [
  {
    title: "Fast Development",
    description:
      "We build and ship products quickly using modern frameworks and best practices.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our solutions are designed to scale as your business grows.",
  },
  {
    title: "Secure Systems",
    description:
      "Security-first approach to protect your data and users.",
  },
  {
    title: "Reliable Support",
    description:
      "Continuous support and maintenance for long-term success.",
  },
];

export default function Features() {
  return (
    <section className=" bg-gray-50">
          <div className="absolute z-0  w-full">
                <Aurora
                  colorStops={["#000000", "#000000", "#000000"]}
                  blend={0.5}
                  amplitude={1.0}
                  speed={0.8}
                />
              </div> 
               
      <div className="max-w-6xl mx-auto">
 
        <h2 className="text-3xl md:text-4xl font-bold flex justify-center">
           <BlurText 
           
  text="What we offer"
  delay={150}
  animateBy="words"
  direction="top"

  className="text-3xl text-white md:text-4xl font-bold text-center"
/>
        </h2>

      
        <div className="mt-4 text-center text-gray-600 max-w-2xl mx-auto flex justify-center">
              <BlurText
  text="  We provide end-to-end digital solutions tailored to your business needs."
  delay={90}
  animateBy="words"
  direction="top"

  className=""
/>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                  <BlurText
  text={feature.title}
  delay={150}
  animateBy="words"
  direction="top"

  className=""
/>
              </h3>
              <div className="text-gray-600 text-sm">
               <BlurText
  text={feature.description}
  delay={100}
  animateBy="words"
  direction="top"

  className=""
/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
