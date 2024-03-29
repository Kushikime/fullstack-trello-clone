import { PropsWithChildren } from "react";
import { Navbar } from "./_components/navbar";

interface DashboardLayoutProps extends PropsWithChildren {}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children } = props;
  return (
    <div className="flex justify-center w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
