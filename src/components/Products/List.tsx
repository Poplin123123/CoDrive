import {
  Box,
  Typography,
  Divider,
  lighten,
  darken,
  Tooltip,
  useTheme,
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
import RoadMap from "../Animations/RoadMap";
import { format, parse } from "date-fns";

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
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <Link href={`/product/${data.id}`} passHref legacyBehavior>
        <Box
          sx={{
            ml: 2,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <RoadMap
            from={data.goingFrom}
            to={data.Destination}
            startTime={data.startTime}
            endTime={data.endTime}
          />
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
            >
              <PersonIcon color="secondary" sx={{ fontSize: "2rem" }} />
              <Typography sx={{ ml: 1 }} fontWeight={700}>
                {user?.firstName} {user?.lastName}
              </Typography>
            </Box>
            <Tooltip
              title={format(
                parse(data.date, "dd/MM/yyyy", new Date()),
                "dd MMMM"
              )}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CalendarTodayIcon
                  color="secondary"
                  sx={{ fontSize: "2rem" }}
                />
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
      </Link>
    </Box>
  );
}
