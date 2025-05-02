import Image from "next/image";
import { Headshots } from "@/constants/assets";
import { p } from "framer-motion/client";

export default function ProfileCard({
  name,
  role,
  contact,
  photoSrc = Headshots.Placeholder,
  className,
}: {
  name: string;
  role: string;
  contact: string;
  photoSrc?: string;
  className?: string;
}) {
  return (
    <button
      className={`px-8 py-6 flex flex-col items-start bg-white/60 ddc-border card-transition ${className}`}
    >
      <Image
        src={photoSrc}
        width={252}
        height={252}
        alt="Ken Jackson"
        className="ddc-border"
      />
      <div className="mt-6 gap-2 flex flex-col items-start">
        <h3 className="subheader text-black">{name}</h3>
        <p className="body text-body/[110%] text-black/60">{role}</p>
        <p className="body text-body/[110%] text-black/60">{contact}</p>
      </div>
    </button>
  );
}
