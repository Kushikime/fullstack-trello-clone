import { PropsWithChildren } from "react";
import { Sidebar } from "../_components/sidebar";

interface OrganizationLayoutProps extends PropsWithChildren {}

const OrganizationLayout = (props: OrganizationLayoutProps) => {
  const { children } = props;
  return (
    <div className="pt-20 w-full md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block ">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default OrganizationLayout;
