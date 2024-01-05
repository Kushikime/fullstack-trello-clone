"use client";
import { FC, useEffect, useState } from "react";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

interface IMobileSidebarProps {}

const MobileSidebar: FC<IMobileSidebarProps> = (props) => {
  const {} = props;
  const pathname = usePathname();
  const { isOpen, onClose, onOpen } = useMobileSidebar((state) => state);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) return null;

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden"
        variant="ghost"
        size="sm"
      >
        <Menu className="w-4 h-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};

export { MobileSidebar };
