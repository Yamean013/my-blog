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
      <div className="animate-slide-up opacity-0">
        <p className="bg-gradient-to-r from-black via-cyan-700 to-black bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer text-2xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo
          sapien, gravida a magna non, vestibulum posuere justo. Suspendisse
          potenti. Aliquam sed lacus consectetur metus commodo hendrerit. Mauris
          mi ipsum, placerat ultrices facilisis sed, porttitor ut nulla. In eget
          ultrices risus, ac eleifend ligula. Maecenas tristique lacinia libero
          eu imperdiet. Curabitur a viverra libero. Curabitur consectetur
          vestibulum aliquet. Suspendisse nec ante a augue egestas elementum. Ut
          lacus ligula, maximus in vehicula sed, luctus quis leo. Nunc eleifend
          quis nunc a volutpat. Suspendisse potenti. Pellentesque aliquet
          gravida arcu vitae venenatis. Nunc elementum placerat pellentesque.
          Pellentesque finibus sem ut ex facilisis placerat. Cras congue id elit
          ut dapibus. Mauris lacus arcu, semper a dui ac, tristique faucibus
          orci. Suspendisse potenti. Donec augue ex, fermentum vitae dignissim
          vel, rutrum eu enim. Donec at massa nisl. Vivamus semper consequat
          orci, sed cursus justo accumsan vitae. Nunc non pharetra lacus, et
          consequat massa. Aliquam faucibus purus et purus consequat molestie.
          Aenean scelerisque, purus eu vulputate vehicula, ex turpis malesuada
          ligula, in fermentum augue nisi sit amet nisl. Etiam a egestas nibh.
          Cras at tortor quam. Nam metus arcu, mattis a sapien faucibus, laoreet
          elementum enim. Sed a commodo risus.
        </p>
      </div>
    </main>
  );
}
