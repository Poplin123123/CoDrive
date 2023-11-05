import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
// import {
//   CloudAPIClient,
//   JsonAPIClient,
//   produceAccessTokenInterceptor,
//   produceLogoutInterceptor,
// } from "@/lib/http";
import PageLoading from "@/components/Loaders";
import MainLayout from "@/layout/main";

type IProps = {
  children: ReactNode;
};

function AuthGuard({ children }: IProps) {
  const [interceptor, setInterceptor] = useState(false);
  const axiosClientRef = useRef<number>(0);
  const jsonApiClientRef = useRef<number>(0);
  const axiosClientReqRef = useRef<number>(0);
  const jsonApiClientReqRef = useRef<number>(0);

  const { data, status } = useSession();
  const router = useRouter();
  const logOutCallback = useCallback(async () => {
    await signOut({ redirect: false });
    router.push("/login");
  }, [router]);

  const hasAccess = !!data?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!hasAccess) router.push("/login");
  }, [status, hasAccess, router]);

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     axiosClientReqRef.current = CloudAPIClient.interceptors.request.use(
  //       produceAccessTokenInterceptor(data?.accessToken as string)
  //     );

  //     jsonApiClientReqRef.current = JsonAPIClient.interceptors.request.use(
  //       produceAccessTokenInterceptor(data?.accessToken as string)
  //     );

  //     setInterceptor(true);
  //   }

  //   return () => {
  //     CloudAPIClient.interceptors.request.eject(axiosClientReqRef.current);
  //     JsonAPIClient.interceptors.request.eject(jsonApiClientReqRef.current);
  //   };
  // }, [data, status]);

  // useEffect(() => {
  //   if (interceptor) {
  //     axiosClientRef.current = CloudAPIClient.interceptors.response.use(
  //       (req) => req,
  //       produceLogoutInterceptor(logOutCallback)
  //     );

  //     jsonApiClientRef.current = JsonAPIClient.interceptors.response.use(
  //       (req) => req,
  //       produceLogoutInterceptor(logOutCallback)
  //     );
  //   }

  //   return () => {
  //     CloudAPIClient.interceptors.response.eject(axiosClientRef.current);
  //     JsonAPIClient.interceptors.response.eject(jsonApiClientRef.current);
  //   };
  // }, [interceptor, logOutCallback, router]);

  if (hasAccess && interceptor) {
    return <MainLayout>{children}</MainLayout>;
  }

  return <PageLoading />;
}

export default AuthGuard;
