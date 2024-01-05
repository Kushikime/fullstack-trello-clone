import { OrganizationProfile } from "@clerk/nextjs";
import { FC, PropsWithChildren } from "react";

const SettingsPage: FC<PropsWithChildren> = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              boxShadow: "none",
              width: "100%",
              border: "1px solid #e5e5e5",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
