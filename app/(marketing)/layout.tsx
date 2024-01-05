import { PropsWithChildren } from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

interface MarketingLayoutProps extends PropsWithChildren {}

const MarketingLayout = (props: MarketingLayoutProps) => {
  const { children } = props;

  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
