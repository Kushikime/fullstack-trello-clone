import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

interface MarketingLayoutProps extends PropsWithChildren {}

const ClerkLayout = (props: MarketingLayoutProps) => {
  const { children } = props;

  return (
    <div className="flex w-full h-full items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
