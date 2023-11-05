import { Box, Card, Autocomplete, TextField, Button } from "@mui/material";
import { products } from "@/mock/products";
import ProductList from "@/components/Products/List";
import Page from "@/components/Page";
import { useMemo, useState } from "react";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { JobTags } from "@/components/Sort";
import { format } from "date-fns";
import { useImmer } from "use-immer";
import Search from "@/components/Search";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";

const tags = [
  "Pets",
  "Smoking",
  "Eating or Drinking",
  "Loud Music",
  "No Phone Conversations",
  "No Unscheduled Stops",
];

interface Tags1 {
  id: number;
  label: string;
  icon?: JSX.Element;
}

const tags1 = [
  { id: 0, label: "None" },
  { id: 1, label: "Price Ascending", icon: <ArrowUpwardTwoToneIcon /> },
  { id: 2, label: "Price Descending", icon: <ArrowDownwardTwoToneIcon /> },
  { id: 3, label: "Time", icon: <AccessTimeIcon /> },
];

export default function ProductDetails() {
  const { data, status } = useSession();
  const router = useRouter();

  const [filter, setFilter] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useImmer({
    leavingFrom: (router.query.leaving as string) || "",
    goingTo: (router.query.going as string) || "",
    guestsQuantity: (router.query.quantity as string) || "",
    date: (router.query.date as string) || format(new Date(), "MM/dd/yyyy"),
  });

  console.log(filters, "filters 11");
  const [sort, setSort] = useState<Tags1>(tags1[0]);

  const sortedProducts = useMemo(() => {
    const tempProducts = [...products];

    console.log(products, "products 111");

    if (sort.id === 0) {
      return tempProducts;
    }

    if (sort.id === 1) {
      return tempProducts.sort((a, b) => a.price - b.price);
    }

    if (sort.id === 2) {
      return tempProducts.sort((a, b) => b.price - a.price);
    }

    if (sort.id === 3) {
      return tempProducts.sort((a, b) => a.price - b.price);
    }

    return tempProducts;
  }, [sort.id]);

  function addNewRide() {
    // if (status !== "authenticated") {
    //   setShowModal(true);
    //   return;
    // }

    router.push("/new-ride");
  }

  console.log(router.query, "router 11");

  return (
    <Page title="Products">
      <Card sx={{ padding: "1em", marginBottom: "2em" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "15%" }}>
            <Autocomplete
              size="medium"
              fullWidth
              options={tags1 || []}
              getOptionLabel={(option) => option.label || ""}
              filterSelectedOptions
              disableClearable
              value={sort}
              onChange={(_, value) => {
                setSort(value);
              }}
              renderOption={(props, option) => (
                <li {...props}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {option?.icon && option.icon}
                    <span style={{ marginLeft: "8px" }}>{option.label}</span>
                  </div>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Sort"
                  fullWidth
                  variant="outlined"
                  label="Sort"
                />
              )}
            />
          </Box>
          <Box
            sx={{
              // width: "50%",
              margin: "auto",
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Search filters={filters} changeFilters={setFilters} />
          </Box>
          <Box sx={{ width: "12%" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ color: "white" }}
              onClick={() => addNewRide()}
            >
              Add New Ride
            </Button>
          </Box>
        </Box>
      </Card>
      <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
        <Box display="flex" gap={2} mb={10}>
          <JobTags tags={tags} filters={filter} setFilters={setFilter} />
        </Box>
        <Box sx={{ width: "100%" }}>
          {sortedProducts?.map((product, i) => (
            <Card key={product.id} sx={{ width: "100%", py: 2, mb: 2 }}>
              <ProductList key={product.id} data={product} />
            </Card>
          ))}
        </Box>
      </Box>
      <ConfirmationModal
        cancelButtonText={"OK"}
        text={"You need to register first before adding a ride."}
        open={showModal}
        onCancel={() => setShowModal(false)}
      />
    </Page>
  );
}
