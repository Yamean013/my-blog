import { Birdhouse, Camera, MenuIcon, Search } from "lucide-react";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      {/* Icon */}
      <div className="flex items-center gap-8">
        <Search />
        <Separator orientation="vertical" className="border-2" />
        <MenuIcon />
      </div>
      {/* Site Name */}
      <div className="text-2xl font-bold">Politics</div>

      {/* Socials */}
      <div className="flex items-center gap-8">
        <Birdhouse />
        <Separator orientation="vertical" className="border-2" />
        <Camera />
      </div>
    </header>
  );
};

export default Header;
