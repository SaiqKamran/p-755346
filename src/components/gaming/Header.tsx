import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  return (
    <header className="self-stretch flex w-full max-w-[1239px] flex-col max-md:max-w-full">
      <nav className="self-stretch flex items-center text-white leading-none flex-wrap justify-between max-md:max-w-full px-4">
        <div className="self-stretch flex items-center gap-[7px] whitespace-nowrap">
          <img 
            src="/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png" 
            alt="Arena Animation Chandigarh Sector 9" 
            className="h-16 w-auto object-contain" 
          />
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6 text-lg font-normal uppercase tracking-[0.72px]">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="font-extrabold text-white hover:text-primary-foreground">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-white hover:text-primary-foreground">Admission</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-white hover:text-primary-foreground">Placements</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-white hover:text-primary-foreground">FAQ</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/degree" 
                className="text-white hover:text-primary-foreground active:bg-white active:text-black focus:bg-white focus:text-black"
              >
                Degree
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-white hover:text-primary-foreground">Contact Us</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="md:hidden">
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
