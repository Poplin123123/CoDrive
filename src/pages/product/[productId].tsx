import CustomerReviews from "@/components/CustomerReviews";
import Page from "@/components/Page";
import TabsSection from "@/components/Tabs";
import { CoDriverTheme } from "@/theme/light";
import {
  Box,
  Card,
  Stack,
  styled,
  Divider,
  Chip,
  lighten,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import EuroIcon from "@mui/icons-material/Euro";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import CheckIcon from "@mui/icons-material/Check";
import PetsIcon from "@mui/icons-material/Pets";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import { UserQuickView } from "@/components/UserQuickView";
import { users } from "@/mock/products";
import { AdditionalInformation } from "@/components/ProductDetails";

export default function Product() {
  const [activeTab, setActiveTab] = useState("Reviews");
  const [showDriverInfo, setShowDriverInfo] = useState(false);

  const theme = useTheme();

  const user = users.find((user) => user.id === "5566");

  const router = useRouter();

  return (
    <Page title="Product">
      <Card sx={{ p: 3, background: lighten(theme.palette.primary.main, 0.1) }}>
        <Stack
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
          onClick={() => router.back()}
          sx={{ cursor: "pointer" }}
        >
          <ArrowBackIcon sx={{ color: "white" }} />
          <Typography variant="h1" fontSize={20} sx={{ color: "white" }}>
            Products
          </Typography>
        </Stack>
        <Typography variant="h2" fontSize={25} mt={1} sx={{ color: "white" }}>
          Tbilisi - Batumi
        </Typography>
        <Typography fontWeight={500} sx={{ color: "white" }}>
          Ride Details
        </Typography>
      </Card>
      <Card sx={{ p: 3 }}>
        <Stack flexDirection={"row"} gap={2}>
          <Box>
            <Image
              src="https://imgd-ct.aeplcdn.com/664x415/n/9herrua_1559465.jpg?q=75"
              alt="car"
              width={500}
              height={300}
            />
          </Box>
          <Stack gap={2}>
            <SectionWrapper>
              <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
                <PersonIcon />
                <SectionHeader>Driver</SectionHeader>
              </Stack>
              <Typography
                sx={{ ml: 1, mt: 1, fontWeight: 500, cursor: "pointer" }}
                onClick={() => setShowDriverInfo(true)}
              >
                Crazy John
              </Typography>
            </SectionWrapper>
            <Divider />
            <SectionWrapper>
              <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
                <LocationOnIcon />
                <SectionHeader>Destination</SectionHeader>
              </Stack>
              <Typography sx={{ ml: 1, mt: 1, fontWeight: 500 }}>
                Tbilisi To Batumi
              </Typography>
            </SectionWrapper>
            <Divider />
            <SectionWrapper>
              <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
                <AirlineSeatReclineNormalIcon />
                <SectionHeader>Free Seats</SectionHeader>
              </Stack>
              <Chip
                label="8"
                color="primary"
                sx={{ ml: 1, mt: 1, fontWeight: 500 }}
              />
            </SectionWrapper>
            <Divider />
            <SectionWrapper>
              <Tooltip title="Price per person">
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={0.5}
                  sx={{ width: "20%" }}
                >
                  <LocalOfferIcon />
                  <SectionHeader>Price:</SectionHeader>
                </Stack>
              </Tooltip>
              <Typography sx={{ ml: 1, mt: 1 }} fontSize={16}>
                2.00 ლარი
              </Typography>
            </SectionWrapper>
            <Divider />
            <SectionWrapper>
              <SectionHeader>Demands</SectionHeader>
              <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
                <SmokeFreeIcon />
                <Typography fontWeight={500}>No smoking</Typography>
              </Stack>
              <Stack
                my={1}
                flexDirection={"row"}
                alignItems={"center"}
                gap={0.5}
              >
                <PetsIcon />
                <Typography fontWeight={500}>Pets are welcome</Typography>
              </Stack>
              <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
                <MusicNoteIcon />
                <Typography fontWeight={500}>Music will be on</Typography>
              </Stack>
            </SectionWrapper>
            <Divider />
          </Stack>
        </Stack>
      </Card>
      <Card sx={{ mt: 4 }}>
        <Box
          sx={{
            background: lighten(theme.palette.primary.main, 0.2),
            py: 2,
            px: 3,
          }}
        >
          <TabsSection
            changeTab={(value: string) => setActiveTab(value)}
            activeTab={activeTab}
            tabList={["Reviews", "Additional Information"]}
          />
        </Box>

        {activeTab === "Reviews" && (
          <Box sx={{ mt: 3, py: 2, px: 3 }}>
            <CustomerReviews />
          </Box>
        )}
        {activeTab === "Additional Information" && (
          <Box sx={{ mt: 3, py: 2, px: 3 }}>
            <AdditionalInformation />
          </Box>
        )}
      </Card>
      {showDriverInfo && (
        <UserQuickView
          open={showDriverInfo}
          onClose={() => setShowDriverInfo(false)}
          user={user}
        />
      )}
    </Page>
  );
}

const SectionHeader = styled(Box)(({ theme }: CoDriverTheme) => ({
  fontSize: "18px",
  fontWeight: 800,
  color: "rgb(34, 51, 84)",
  marginBottom: "2px",
}));

const SectionWrapper = styled(Box)(({ theme }: CoDriverTheme) => ({
  paddingLeft: 16,
  paddingRight: 16,
}));
