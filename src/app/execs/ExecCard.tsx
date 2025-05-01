import Image from "next/image";

export default function ExecCard({ className }: { className?: string }) {
  return (
    <button
      className={`px-8 py-6 flex flex-col items-start bg-white/60 bordered card-transition ${className}`}
    >
      <Image
        src="/assets/execs/ken.png"
        width={252}
        height={252}
        alt="Ken Jackson"
        className="bordered"
      />
      <div className="mt-6 gap-2 flex flex-col items-start">
        <h3 className="subheader text-black">Ken Jackson</h3>
        <p className="body text-body/[110%] text-black/60">President</p>
        <p className="body text-body/[110%] text-black/60">president@ddclub.ca</p>
      </div>
    </button>
  );
}
