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
      <div className="flex justify-center pt-2">
        <h1 className="text-4xl font-bold hover:text-cyan-700">
          The Blog for Knowledge
        </h1>
      </div>
    </main>
  );
}
