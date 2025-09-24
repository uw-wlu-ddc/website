import Image from "next/image";
import { Headshots } from "@/constants/assets";
import Link from "next/link";


const cardTransitionClasses = "transition-all hover:!-translate-x-3 hover:!-translate-y-3 hover:!shadow-singleShadow";

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
    <a
      className={`w-fit max-w-80 px-8 py-6 bg-white/60 ddc-border ${cardTransitionClasses} ${className}`}
      href={`mailto:${contact}`}
    >
      <Image
        src={photoSrc}
        width={252}
        height={252}
        alt="Ken Jackson"
        className="ddc-border"
      />
      <div className="mt-6 gap-2 flex flex-col items-start">
        <h3>{name}</h3>
        <p className="text-body/[110%] text-black/60">{role}</p>
        <p className="text-body/[110%] text-black/60">{contact}</p>
      </div>
    </a>
  );
}
