import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { BackgroundGradient } from "./background-gradient";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    followers: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current!.offsetLeft;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex overflow-x-auto whitespace-nowrap gap-6 py-10 cursor-grab active:cursor-grabbing",
        "custom-scroll"
      )}
      style={{
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
      }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {items.map((item, idx) => (
        <BackgroundGradient
          key={idx}
          className="w-48 shrink-0 h-full rounded-lg bg-zinc-800/[0.9] overflow-hidden"
        >
          <div
            className="relative group block h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card>
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 rounded-full mx-auto object-cover border-2 border-gray-300"
              />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <p className="text-zinc-300 text-sm mt-2">
                {item.followers} Followers
              </p>
            </Card>
          </div>
        </BackgroundGradient>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full overflow-hidden  group-hover:border-slate-700 relative z-20 text-center",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 text-xs font-bold tracking-wide mt-3", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-1 mx-auto w-max text-center text-wrap text-zinc-400 tracking-wide text-xs", className)}>
      {children}
    </p>
  );
};
