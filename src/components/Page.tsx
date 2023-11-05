import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import PageLoading from "@/components/Loaders";

type IProps = {
  children: ReactNode;
  title?: string;
  loading?: boolean;
};

function Page({ children, title = "", loading = false }: IProps) {
  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {loading ? <PageLoading /> : children}
    </Box>
  );
}

export default Page;
