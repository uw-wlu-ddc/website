import ProfileCard from "@/components/ProfileCard";

export default function Executives() {
  return (
    <div className="flex flex-col items-center mb-28 ">
      <h2 className="mb-16 mt-32 grow-0 ddc-page-header ddc-headerbox ddc-border">
        Executive
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProfileCard name="Ken Jackson" role="President" contact="president@ddclub.ca" key={index} />
        ))}
      </div>
    </div>
  );
}
