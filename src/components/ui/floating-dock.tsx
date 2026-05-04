"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/5 z-0"
            />
            <motion.div
              layoutId="nav"
              className="absolute bottom-full right-0 mb-4 flex flex-col items-end gap-3 z-10"
            >
              {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-xs font-bold text-white bg-deep-charcoal/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity whitespace-nowrap !opacity-100">
                    {item.title}
                  </span>
                  <div className="h-10 w-10 rounded-full bg-deep-charcoal/95 backdrop-blur-md border border-white/10 flex items-center justify-center text-paper shadow-xl">
                    <div className="h-4 w-4">{item.icon}</div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="flex justify-end w-full">
        <button
          onClick={() => setOpen(!open)}
          className="h-12 w-12 rounded-full bg-deep-charcoal border border-white/10 flex items-center justify-center text-paper relative z-10 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconLayoutNavbarCollapse className="h-6 w-6" />
          </motion.div>
        </button>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-paper border border-carbon-grey/10 px-4 pb-3 shadow-xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/10 border border-white/5 flex items-center justify-center relative transition-colors hover:bg-electric-cyan hover:text-deep-charcoal group"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-1 whitespace-pre rounded-md bg-electric-cyan text-deep-charcoal absolute left-1/2 -top-10 w-fit text-xs font-black shadow-lg border border-white/20"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-paper group-hover:text-deep-charcoal transition-colors"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
