import { Insta } from "../../components/Insta/Insta";
import { Separator } from "../../components/Separator";
import { Social } from "../../components/Social";
import { Navbar } from "../../layout/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          className="h-screen z-0 relative object-cover w-full"
          src={
            "https://g.api.no/obscura/API/dynamic/r1/ece5/tr_2000_2000_s_f/1659171100000/nida/2022/7/30/10/NTB_J9mric0IFfk.jpg?chk=F9959D"
          }
          alt=""
        />
        <div className="absolute top-12 lg:top-1/3  p-5 lg:right-28 overflow-hidden ">
          <h1 className="text-white font-bold text-6xl">Kasper Foss</h1>
          <p className="text-white font-medium text-xl">Imitator</p>
        </div>
        <Separator />
        <Insta />
        <Separator />
        <Social />
      </div>
    </div>
  );
};
