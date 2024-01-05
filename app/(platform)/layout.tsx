import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

interface MarketingLayoutProps extends PropsWithChildren {}

const PlatformLayout = (props: MarketingLayoutProps) => {
  const { children } = props;

  return (
    <ClerkProvider>
      <div className="h-full">{children}</div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
