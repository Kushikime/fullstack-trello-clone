import { PropsWithChildren } from "react";
import { Navbar } from "./_components/navbar";

interface DashboardLayoutProps extends PropsWithChildren {}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
