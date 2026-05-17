import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      <Separator />
      <NavigationMenu className="max-w-full w-full">
        <NavigationMenuList className="flex-1 w-full justify-between">
          <NavigationMenuItem>Home</NavigationMenuItem>
          <NavigationMenuItem>New</NavigationMenuItem>
          <NavigationMenuItem>Top News</NavigationMenuItem>
          <NavigationMenuItem>Politics</NavigationMenuItem>
          <NavigationMenuItem>Sports</NavigationMenuItem>
          <NavigationMenuItem>Economy</NavigationMenuItem>
          <NavigationMenuItem>Home</NavigationMenuItem>
          <NavigationMenuItem>Culture</NavigationMenuItem>
          <NavigationMenuItem>Technology</NavigationMenuItem>
          <NavigationMenuItem>Science</NavigationMenuItem>
          <NavigationMenuItem>Health</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </div>
  );
};

export default Navbar;
