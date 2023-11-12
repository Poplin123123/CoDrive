import { BaseDrawer, BaseDrawerHeader } from "@/components/drawer";
import {
  Box,
  Chip,
  styled,
  Typography,
  Divider,
  Stack,
  useTheme,
} from "@mui/material";
import { THEME_COLORS } from "@/theme/light/foundation/colors";
import { FiberManualRecordTwoTone } from "@mui/icons-material";
import Image from "next/image";
import { CoDriverTheme } from "@/theme/light";
import PreviewIcon from "@mui/icons-material/Preview";
import StarRatings from "react-star-ratings";

interface Props {
  open: boolean;
  onClose: () => void;
  user:
    | {
        id: string;
        img: string;
        firstName: string;
        lastName: string;
      }
    | undefined;
}

function UserQuickView({ open, onClose, user }: Props) {
  const theme = useTheme();

  if (!user) {
    return;
  }

  return (
    <BaseDrawer
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <BaseDrawerHeader
        title={
          <Box display="flex" justifyContent="center" alignItems="center">
            <DateChip
              label={
                <Typography
                  fontWeight={600}
                  sx={{ fontSize: "20px !important" }}
                >
                  User Quick View
                </Typography>
              }
              variant="outlined"
            />
          </Box>
        }
        color={theme.palette.secondary.main}
        onClose={onClose}
        backgroundColor={theme.palette.secondary.main}
      />
      <ContentWrapper>
        <Box
          sx={{
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Image
            src={"/assets/joni.jpeg"}
            width={150}
            height={150}
            alt="event image"
            loading="lazy"
            style={{
              borderRadius: "6px",
              opacity: 0.9,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Typography
            fontSize={"25px"}
            fontWeight={700}
            color={theme.palette.primary.dark}
          >
            {user.firstName} {user.lastName}
          </Typography>
        </Box>
        <Divider sx={{ my: 2, height: 1.5 }} />
        <Stack sx={{ px: 2 }}>
          <Box>
            <SectionHeader>Driving experience</SectionHeader>
            <SectionData>20 years</SectionData>
          </Box>
          <Divider sx={{ my: 2, height: 1.5 }} />
          <Box>
            <SectionHeader>Overall Rating</SectionHeader>
            <SectionData>4.5</SectionData>
            <StarRatings
              rating={4.5}
              starRatedColor={theme.palette.secondary.main}
              numberOfStars={5}
              name="rating"
              starDimension="37px"
            />
          </Box>
          <Divider sx={{ my: 2, height: 1.5 }} />
          <Box>
            <SectionHeader>Completed Rides</SectionHeader>
            <SectionData>220</SectionData>
          </Box>
          <Divider sx={{ my: 2, height: 1.5 }} />
          <Box>
            <SectionHeader>More About Driver</SectionHeader>
            <SectionData>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dicta, laudantium incidunt voluptatem ad, amet itaque vero et
              similique harum ipsa placeat distinctio quae, nesciunt dolorem ex!
              Pariatur, optio eos.
            </SectionData>
          </Box>
        </Stack>
      </ContentWrapper>
    </BaseDrawer>
  );
}

export { UserQuickView };

const ContentWrapper = styled(Box)(({ theme }: CoDriverTheme) => ({
  padding: theme?.spacing(2),
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "91%",
}));

const DateChip = styled(Chip)(({ theme }: CoDriverTheme) => ({
  color: theme?.colors.alpha.white[100],
  border: "none",
  paddingTop: theme?.spacing(3),
  paddingBottom: theme?.spacing(3),
  "& svg": {
    fill: theme?.colors.alpha.white[100],
  },
  "& .MuiTypography-root": {
    fontSize: theme?.typography.h4.fontSize,
  },
}));

const SectionHeader = styled(Box)(({ theme }: CoDriverTheme) => ({
  fontSize: "16px",
  fontWeight: 800,
  color: theme?.colors.secondary.dark,
  marginBottom: "2px",
}));

const SectionData = styled(Box)(({ theme }: CoDriverTheme) => ({
  fontSize: "20px",
  fontWeight: 700,
  color: theme?.colors.primary.light,
}));

// gray - #777777
