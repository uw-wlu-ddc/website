import ProfileCard from "@/components/ProfileCard";
import { Headshots } from "@/constants/assets";

export default function Executives() {
  return (
    <div className="flex flex-col items-center mb-28 ">
      <h2 className="mb-16 mt-32 grow-0 ddc-headerbox ddc-border">
        Current Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard
          name="Sean Kim"
          role="President"
          contact="president@ddclub.ca"
          photoSrc={Headshots.President}
        />
        <ProfileCard
          name="Estella Vaynshteyn"
          role="VP, WLU Affairs"
          contact="vpwlu@ddclub.ca"
          photoSrc={Headshots.VPWLU}
        />
        <ProfileCard
          name="Sky Yu"
          role="VP, UW Affairs"
          contact="vpuw@ddclub.ca"
          photoSrc={Headshots.VPUW}
        />
        <ProfileCard
          name="Cyrus Bharucha"
          role="Director of Finance"
          contact="finance@ddclub.ca"
        />
        <ProfileCard
          name="Arnav Divekar"
          role="Director of Finance"
          contact="finance@ddclub.ca"
        />
        <ProfileCard
          name="Serene Xue"
          role="Director of Internal Affairs"
          contact="internal@ddclub.ca"
        />
        <ProfileCard
          name="Sebastian Arellano-Rubach"
          role="Director of External Affairs"
          contact="external@ddclub.ca"
          photoSrc={Headshots.ExtS}
        />
        <ProfileCard
          name="Jackson Sorger"
          role="Director of External Affairs"
          contact="external@ddclub.ca"
          photoSrc={Headshots.ExtJ}
        />
        <ProfileCard
          name="Stella Delorey"
          role="Director of Marketing"
          contact="marketing@ddclub.ca"
        />
        <ProfileCard
          name="Kaeden Christopher"
          role="Director of Marketing"
          contact="marketing@ddclub.ca"
        />
        <ProfileCard
          name="Andy Sun"
          role="First Year Ambassador"
          contact="ambfirstyear@ddclub.ca"
          photoSrc={Headshots.FYAA}
        />
        <ProfileCard
          name="Barnett Luo"
          role="First Year Ambassador"
          contact="ambfirstyear@ddclub.ca"
          photoSrc={Headshots.FYAB}
        />
        <ProfileCard
          name="Vivian Yang"
          role="First Year Ambassador"
          contact="ambfirstyear@ddclub.ca"
          photoSrc={Headshots.FYAV}
        />
        <ProfileCard
          name="Karan Singh Cheema"
          role="First Year Ambassador"
          contact="ambfirstyear@ddclub.ca"
          photoSrc={Headshots.FYAK}
        />
      </div>
    </div>
  );
}
