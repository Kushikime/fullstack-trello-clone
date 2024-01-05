import { PropsWithChildren } from "react";
import OrgControl from "./_components/OrgControl";

interface OrganizationLayoutProps extends PropsWithChildren {}

const OrganizationIdLayout = (props: OrganizationLayoutProps) => {
  const { children } = props;
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
