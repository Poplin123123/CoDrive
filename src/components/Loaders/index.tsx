import { useEffect } from "react";
import NProgress from "nprogress";
import { Box, CircularProgress } from "@mui/material";

function PageLoading() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{ width: "100%", height: "100vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress size={128} disableShrink thickness={3} />
    </Box>
  );
}

export default PageLoading;
