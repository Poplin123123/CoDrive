import { ReactNode } from "react";
import { PageAccess } from "@/config/page-access";
import AuthGuard from "@/components/guards/Auth";
import AnonymousGuard from "@/components/guards/Anonymous";
import { NotFound } from "@/components/error";

type IProps = {
  children: ReactNode;
  access?: PageAccess;
};

function AccessChecker({ children, access }: IProps) {
  if (!access) {
    return <NotFound />;
  }
  return (
    <>
      {access === PageAccess.SECURED && <AuthGuard>{children}</AuthGuard>}
      {access === PageAccess.ANONYMOUS && (
        <AnonymousGuard>{children}</AnonymousGuard>
      )}
      {access == PageAccess.SHARED && children}
    </>
  );
}

export default AccessChecker;
