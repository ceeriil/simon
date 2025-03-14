import {
  NextJsIcon,
  ReactJsIcon,
  CSSIcon,
  TailwindIcon,
  TypescriptIcon,
  FireBaseIcon,
} from "@/components/assets";

interface ITools {
  name: string;
  icon: React.ReactNode;
}

const tools: ITools[] = [
  {
    name: "Next Js",
    icon: <NextJsIcon className="w-[14rem] h-[14rem]" />,
  },
  {
    name: "React Js",
    icon: <ReactJsIcon className="w-[14rem] h-[14rem]" />,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon className="w-[14rem] h-[14rem]" />,
  },
  {
    name: "CSS",
    icon: <CSSIcon className="w-[14rem] h-[14rem]" />,
  },
  {
    name: "Firebase",
    icon: <FireBaseIcon className="w-[14rem] h-[14rem]" />,
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon className="w-[14rem] h-[14rem]" />,
  },
];

export const SectionTools = () => {
  return (
    <section className="border-t ">
      <div className="container mx-auto px-4">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium">
          Tools
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 gap-y-7 py-16 items-center">
          {tools.map(({ name, icon }) => (
            <div
              className="border-[#727171]  uppercase tracking-[0.3rem] text-xl   items-center text-center justify-center flex border-b-4 border-b-[#fff] flex-col  skill-card"
              key={name}
            >
              <div className=" grid-background py-12 px-3 bg-[#1A1A1A]">
                <div className="z-10 relative w-full flex flex-col items-center ">
                  {" "}
                  {icon}
                  <h3 className="mt-16 mb-8 font-medium">{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
