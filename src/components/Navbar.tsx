"use client";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconHome,
  IconListDetails,
  IconMessageHeart,
  IconReceipt2,
  IconTargetArrow,
  IconShoppingCart,
  IconShieldCheck
} from "@tabler/icons-react";

export const Navbar = () => {
  const links = [
    {
      title: "Accueil",
      icon: <IconHome className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Programme",
      icon: <IconListDetails className="h-full w-full" />,
      href: "#programme",
    },
    {
      title: "Pour qui ?",
      icon: <IconTargetArrow className="h-full w-full" />,
      href: "#ciblage",
    },
    {
      title: "Témoignages",
      icon: <IconMessageHeart className="h-full w-full" />,
      href: "#temoignages",
    },
    {
      title: "Tarifs",
      icon: <IconReceipt2 className="h-full w-full" />,
      href: "#tarifs",
    },
    {
      title: "Ma Promesse",
      icon: <IconShieldCheck className="h-full w-full" />,
      href: "#promesse",
    },
    {
      title: "Rejoindre",
      icon: <IconShoppingCart className="h-full w-full" />,
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock 
          items={links} 
          desktopClassName="bg-paper/80 backdrop-blur-md"
          mobileClassName="translate-y-0"
        />
      </div>
    </div>
  );
};
