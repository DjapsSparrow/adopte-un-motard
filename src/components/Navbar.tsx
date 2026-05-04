"use client";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { AnimatedThemeToggler } from "./ui/AnimatedThemeToggler";
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
      title: "Ma Promesse",
      icon: <IconShieldCheck className="h-full w-full" />,
      href: "#promesse",
    },
    {
      title: "Pour qui ?",
      icon: <IconTargetArrow className="h-full w-full" />,
      href: "#ciblage",
    },
    {
      title: "Tarifs",
      icon: <IconReceipt2 className="h-full w-full" />,
      href: "#tarifs",
    },
    {
      title: "Témoignages",
      icon: <IconMessageHeart className="h-full w-full" />,
      href: "#temoignages",
    },
    {
      title: "Rejoindre",
      icon: <IconShoppingCart className="h-full w-full" />,
      href: "https://ecole.fudoshin.solutions/offers/aab1d65b-e96b-49a2-b054-de94398f7f7b",
      target: "_blank",
    },
  ];

  return (
    <>
      {/* Top Floating Toggler */}
      <div className="fixed top-6 right-6 z-[60] pointer-events-auto">
        <AnimatedThemeToggler 
          className="p-3 rounded-2xl bg-surface/50 backdrop-blur-md border border-white/10 text-accent hover:scale-110 transition-transform shadow-xl light:bg-white light:border-black/5 cursor-pointer" 
        />
      </div>

      <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center md:justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-5xl flex justify-end md:justify-center">
          <FloatingDock 
            items={links} 
          />
        </div>
      </div>
    </>
  );
};
