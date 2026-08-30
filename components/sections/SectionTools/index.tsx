import {
  NextJsIcon,
  ReactJsIcon,
  CSSIcon,
  TailwindIcon,
  TypescriptIcon,
  FireBaseIcon,
} from "@/components/assets";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section>
      <SectionHeading title="Tools Box" subtitle="// Tech Stack" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 gap-y-7 py-16 items-center w-full px-4">
          {tools.map(({ name, icon }) => (
            <div
              className="border-[#727171]  uppercase tracking-[0.3rem] text-xl   items-center text-center justify-center flex border-b-4 border-b-[#fff] flex-col  skill-card"
              key={name}
            >
              <div className=" grid-background lg:py-12 py-6 px-3 bg-[#1A1A1A]">
                <div className="z-10 relative w-full flex flex-col items-center ">
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
