import AboutText from "@/markdown/about-execs/about-execs.mdx";

export default function AboutExecsPage() {
  return (
    <div className="flex flex-col items-center mb-28">
      <h2 className="mt-32 mb-16 ddc-headerbox ddc-border">
        About Execs
      </h2>
      <div className="flex flex-col justify-start">
        <div className="px-28 pb-16 w-[58rem] min-h-[28rem] flex flex-col items-start bg-white/60 ddc-border">
          <AboutText />
        </div>
      </div>
    </div>
  );
}
