import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useEffect } from "react";
import PageLoading from "@/components/Loaders";

type IProps = {
  children: ReactNode;
};

function AnonymousGuard({ children }: IProps) {
  const { data, status } = useSession();
  const router = useRouter();
  const hasNoAccess = !!data?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (hasNoAccess) router.push("/");
  }, [status, hasNoAccess, router]);

  if (!hasNoAccess) {
    return <>{children}</>;
  }

  return <PageLoading />;
}

export default AnonymousGuard;
