import { Global, css } from "@emotion/react";
import Search from "../components/Search";
import Page from "../components/Page";
import { useRouter } from "next/router";
import { HelmetProvider } from "react-helmet-async";
import { useTheme } from "@mui/material";
import { useSession } from "next-auth/react";
import {
  Card,
  Grid,
  InputAdornment,
  TextField,
  Popover,
  Typography,
  Box,
  Autocomplete,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import { useImmer } from "use-immer";

interface IFilters {
  leavingFrom: string;
  goingTo: string;
  guestsQuantity: string;
  date: string;
}

export default function Home() {
  const theme = useTheme();
  const { data: session, status } = useSession();
  const router = useRouter();

  const [filters, setFilters] = useImmer({
    leavingFrom: "",
    goingTo: "",
    guestsQuantity: "",
    date: format(new Date(), "dd/MM/yyyy"),
  });

  const handleSubmit = (
    leaving: string,
    going: string,
    quantity: string,
    date?: string
  ) => {
    const query = { leaving, going, quantity, date };
    router.push({
      pathname: `/products/${leaving}`, // Specify the dynamic route
      query: query, // Specify query parameters here
    });
  };

  return (
    <Page title="CoDrive">
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Box sx={{ width: "70%", margin: "auto" }}>
        <Card sx={{ mb: 2 }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ p: 2, flexDirection: { xs: "column", sm: "row" } }}
            gap={2}
          >
            <Search filters={filters} changeFilters={setFilters} />
            <Grid item md={1} sm={12} xs={12}>
              <Grid
                container
                item
                gap={2}
                md={12}
                sm={12}
                xs={12}
                alignSelf="stretch"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  // sx={{ color: "#73d700", borderColor: "#73d700" }}
                  onClick={() =>
                    handleSubmit(
                      filters.leavingFrom,
                      filters.goingTo,
                      filters.guestsQuantity,
                      filters.date
                    )
                  }
                  disabled={
                    !filters.leavingFrom ||
                    !filters.goingTo ||
                    !filters.guestsQuantity
                  }
                  sx={{ height: "53px", px: 7 }}
                >
                  {/* {isValidating && (
                <CircularProgress
                  sx={{ mr: 1 }}
                  size={20}
                  disableShrink
                  thickness={3}
                />
              )} */}
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Page>
  );
}

// Green
// #73d700
// #5cc500
// #31a100
// #187d00
