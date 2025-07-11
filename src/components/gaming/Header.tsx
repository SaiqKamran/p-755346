
import React from "react";
import { Home, FileText, User, Mail, DollarSign, Newspaper, BriefcaseBusiness } from "lucide-react";
import { NavBar } from "../ui/tubelight-navbar";

export const Header: React.FC = () => {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Admission", url: "/admission", icon: FileText },
    { name: "Placements", url: "/placements", icon: FileText },
    { name: "Courses", url: "/degree", icon: User },
    { name: "Fees", url: "/fees", icon: DollarSign },
    { name: "News&Events", url: "/news", icon: Newspaper },
    { name: "Contact", url: "/contact", icon: Mail },
    { name: "HireFromUs", url: "/hirefromus", icon: BriefcaseBusiness },
    { name: "FAQ", url: "/faq", icon: FileText },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NavBar items={navItems} />
    </header>
  );
};
