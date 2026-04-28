import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <div className="flex justify-end cursor-pointer">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={cn(navigationMenuTriggerStyle(), "text-xl")}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Company</NavigationMenuLink>
              <NavigationMenuLink>Milestones</NavigationMenuLink>
              <NavigationMenuLink>Careers</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              Contact
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Find Us</NavigationMenuLink>
              <NavigationMenuLink>Email Us</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
