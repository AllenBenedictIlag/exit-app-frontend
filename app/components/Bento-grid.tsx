import { cn } from "@/lib/utils";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconCalendarTime,
  IconClipboardCopy,
  IconClipboardList,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconTrendingUp,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentro-grid";
import Link from "next/link";

export function BentoGridDemo() {
  return (
    
    <BentoGrid className="max-w-6xl mx-auto px-4 md:px-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={cn(
            i === 3 || i === 6 ? "md:col-span-2" : "",
            "group/bento hover:shadow-xl dark:hover:shadow-neutral-700/50",
            "bg-gradient-to-br from-neutral-50/30 to-neutral-100/30 dark:from-neutral-900 dark:to-neutral-800",
            "backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700"
          )}
          header={
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-2xl font-bold">{item.value}</span>
              </div>
              {item.change && (
                <span className="text-sm text-green-600 dark:text-green-400">
                  {item.change}
                </span>
              )}
            </div>
          }
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-neutral-200/50 dark:bg-neutral-800">
    <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:200%_100%]" />
  </div>
);
const items = [
    {
        title: "Exit Interviews This Month",
        value: "24",
        change: "+12%",
        icon: <IconClipboardList className="h-6 w-6" />,
        href: "/exit-interviews",
      },
      {
        title: "Top Resignation Reason",
        value: "Career Growth",
        icon: <IconTrendingUp className="h-6 w-6" />,
        description: "45% of exits cited this reason",
      },
      {
        title: "Avg. Retention Period",
        value: "2.8 Years",
        icon: <IconCalendarTime className="h-6 w-6" />,
        change: "-6% YoY",
      },
];
