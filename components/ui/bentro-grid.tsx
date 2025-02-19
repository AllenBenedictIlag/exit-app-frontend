import { cn } from "@/lib/utils";
import React from "react";

interface BentoGridItemProps {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({  
    className,
    title,
    description,
    header,
    icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-300 ease-out",
        "hover:scale-[1.015] transform-gpu", // Smooth scale-up
        className
      )}
    >
      <div className="h-full flex flex-col justify-between p-6">
        {/* Header with subtle shine effect */}
        <div className="relative overflow-hidden rounded-xl">
          {header}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-neutral-600 dark:text-neutral-400">
              {icon}
            </span>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 text-lg">
              {title}
            </h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
