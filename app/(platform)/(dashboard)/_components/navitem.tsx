"use client";
import { FC } from "react";
import Image from "next/image";
import { Activity, Layout, Settings } from "lucide-react";
import { OrganizationResource } from "@clerk/types";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface INavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Pick<OrganizationResource, "id" | "slug" | "imageUrl" | "name">;
  onExpand: (id: string) => void;
}

export const NavItem: FC<INavItemProps> = (props) => {
  const {
    isActive,
    isExpanded,
    onExpand,
    organization: { id, imageUrl, name, slug },
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${id}/settings`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md  hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={imageUrl}
              alt={`${name}_profile_img`}
              className="rounded-sm object-cover"
            />
          </div>
          <span className="text-start font-medium text-sm">{name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {routes.map((route) => (
          <Button
            key={route.href}
            size="sm"
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};
