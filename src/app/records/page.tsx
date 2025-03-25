import TitleWithPath from "@/components/TitleWithPathArray";
import UserPageLayout from "@/components/userPageLayout";
import React from "react";

const Page = () => {
  return (
    <>
      <UserPageLayout>
        <TitleWithPath
          currentPath={"Records"}
          previousPaths={["Dashboard", "Wallet"]}
        />
      </UserPageLayout>
    </>
  );
};

export default Page;
