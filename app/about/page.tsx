import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <main>
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
              <NavigationMenuLink href="/about">
                <NavigationMenuTrigger className="text-xl">
                  About
                </NavigationMenuTrigger>
              </NavigationMenuLink>
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
      <div className="flex justify-center pt-2">
        <h1 className="text-4xl font-bold hover:text-cyan-700">
          The Blog for Knowledge
        </h1>
      </div>
    </main>
  );
}
