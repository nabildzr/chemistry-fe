import React from "react";

type UserPageLayoutProps = {
  children?: React.ReactNode;
};

const UserPageLayout = ({ children }: UserPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  );
};

export default UserPageLayout;
