"use client";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FC, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { NavItem } from "./navitem";

interface ISidebarProps {
  storageKey?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { storageKey = "t-sidebar-state" } = props;

  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: activeOrg, isLoaded: isOrgLoaded } = useOrganization();
  const { userMemberships, isLoaded: isOrgListLoaded } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (key: string) => {
    setExpanded((curr) => ({
      ...curr,
      [key]: !expanded[key],
    }));
  };

  if (!isOrgLoaded || !isOrgListLoaded || userMemberships.isLoading) {
    return <Skeleton />;
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center justify-between mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};
