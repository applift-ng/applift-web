import Image from "next/image";

const OurProcess = () => {
  const steps = [
    { name: "Discovery and Planning", Image: "/discovery.png" },
    { name: "Design and Prototyping", Image: "/design.png" },
    { name: "Development and Testing", Image: "/dev.png" },
    { name: "Deployment and Maintenance", Image: "/deploy.png" },
    { name: "Continous Improvement", Image: "/improve.png" },
    { name: "Many More", Image: "/discovery.png" },
  ];
  return (
    <section className="flex flex-col gap-10 md:p-16">
      <h1 className="text-4xl font-orelega-one">Our Process</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-40 justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-5 md:gap-10"
          >
            <Image
              width={200}
              height={200}
              src={step.Image}
              alt={step.name}
              className="w-1/3"
            />
            <article className="flex flex-col gap-5">
              <h3 className="">{step.name}</h3>
            </article>
          </div>
        ))}
      </section>
    </section>
  );
};

export default OurProcess;
