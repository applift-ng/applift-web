const Project = ({
  img,
  name,
  className,
  theme,
}: {
  name: string;
  img: string;
  className?: string;
  theme: string;
}) => {
  return (
    <section
      className={`${className}  rounded-md cursor-pointer overflow-hidden flex justify-center z-20 items-center relative h-[250px]`}
    >
      <img
        className="w-full -z-10 absolute object-cover  h-full"
        src={img}
        alt=""
      />
      <article
        style={{ backgroundColor: theme }}
        className="relative px-4 py-1 rounded-md flex after:absolute after:w-full after:h-full after:rounded-lg after:bg-black after:top-1 after:left-1 after:-z-10"
      >
        <p className="text-2xl ">{name}</p>
      </article>
    </section>
  );
};

export default Project;
