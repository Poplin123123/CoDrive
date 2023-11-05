import {
  Box,
  Typography,
  Divider,
  lighten,
  darken,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { users } from "@/mock/products";
import PriceBag from "./PriceBage";
import Link from "next/link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { UserQuickView } from "../UserQuickView";
import { useState } from "react";

interface IProps {
  data: {
    id: string;
    goingFrom: string;
    Destination: string;
    userId: string;
    carImg: string;
    phone: string;
    date: string;
    time: string;
    carModel: string;
    freeSpots: number;
    price: number;
    currency: string;
    startTime: string;
    endTime: string;
  };
}

export default function ProductList({ data }: IProps) {
  const user = users.find((user) => user.id === data.userId);
  const [showUserQuickView, setShowUserQuickView] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Link href={`/product/${data.id}`} passHref legacyBehavior>
        <Box sx={{ cursor: "pointer" }}>
          <Image
            src="https://imgd-ct.aeplcdn.com/664x415/n/9herrua_1559465.jpg?q=75"
            alt="photo"
            width={250}
            height={150}
          />
        </Box>
      </Link>
      <Box
        sx={{
          ml: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <Typography variant="h1" sx={{ ml: 1, fontSize: "24px" }}>
            {data.Destination}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FiberManualRecordIcon sx={{ color: "rgba(52, 58, 64, 0.7)" }} />
            <Divider
              sx={{
                width: "5px",
                height: "50px",
                my: "-5px",
                background: "rgba(82, 85, 91, 0.1)",
                // background:
                //   "linear-gradient(to right, #9eff73, #55ff0b, #31a100)",
              }}
            />
            <FiberManualRecordIcon sx={{ color: "rgba(52, 58, 64, 0.7)" }} />
          </Box>
          <Typography variant="h1" sx={{ fontSize: "24px" }}>
            {data.goingFrom}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            ml: 2,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setShowUserQuickView(true)}
          >
            <PersonIcon color="secondary" sx={{ fontSize: "2rem" }} />
            <Typography sx={{ ml: 1 }} fontWeight={700}>
              {user?.firstName} {user?.lastName}
            </Typography>
          </Box>
          <Tooltip title="9 September">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayIcon color="secondary" sx={{ fontSize: "2rem" }} />
              <Typography variant="h3" sx={{ ml: 1, fontSize: "14px" }}>
                {data.date}, {data.startTime} - {data.endTime}
              </Typography>
            </Box>
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            ml: 2,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <AttachMoneyIcon sx={{ color: "#31a100" }} /> */}
            <Image
              height={20}
              width={40}
              alt="CoDrive"
              src="/assets/lari.svg"
            />
            <Typography fontSize={"14px"}>{data.price}</Typography>
          </Box>
          <PriceBag price={data.price} />
        </Box>
      </Box>
      <UserQuickView
        open={showUserQuickView}
        onClose={() => setShowUserQuickView(false)}
        user={user}
      />
    </Box>
  );
}
