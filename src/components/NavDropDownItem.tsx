import Link from "next/link";

export default function NavDropDownItem({
  title,
  summary,
  route,
}: {
  title: string;
  summary: string;
  route: string;
}) {
  return (
    <div className="w-72 p-4 inline-flex flex-col justify-start items-start border-2 border-transparent hover:ddc-border">
        <Link href={route}>
            <h3>{title}</h3>
            <span className="font-baskerville text-body">{summary}</span>
        </Link>
    </div>
  );
}
