
import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  return (
    <header className="self-stretch flex w-full max-w-[1239px] flex-col max-md:max-w-full">
      <nav className="self-stretch flex items-center text-white leading-none flex-wrap justify-between max-md:max-w-full px-4">
        <div className="self-stretch flex items-center gap-[7px] whitespace-nowrap">
          <img
            src="/lovable-uploads/0335d652-9f31-4a64-9bd3-fac5bad28c6c.png"
            className="h-16 object-contain"
            alt="Arena Animation Chandigarh 9 Logo"
          />
          <div className="text-2xl font-extrabold tracking-wide">
            <span className="block text-white">CHANDIGARH 9</span>
          </div>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6 text-lg font-normal uppercase tracking-[0.72px]">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="font-extrabold">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Admission</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Placements</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">FAQ</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Degree</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">VFX/Gaming</div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Contact Us</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="md:hidden">
          <button className="p-2">
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
