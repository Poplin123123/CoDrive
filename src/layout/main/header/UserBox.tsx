import Avatar from "@/components/Avatar";
import UserDropdown from "./UserDropdown";
// import useCurrentUser from "@/hooks/user";
import {
  Box,
  styled,
  Button,
  lighten,
  Typography,
  CircularProgress,
} from "@mui/material";
// import { imageWithFallback } from "@/lib/helpers";
import { useRef, useState, useEffect } from "react";
import { ExpandMoreTwoTone, UnfoldMoreTwoTone } from "@mui/icons-material";
import { CoDriverTheme } from "@/theme/light";
import { Session } from "next-auth";

interface IProps {
  data: Session;
  placement: "header" | "sidebar";
}

function UserBox({ placement, data }: IProps) {
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Box>
      {isLoading && <CircularProgress size="1rem" color="secondary" />}
      {!isLoading && (
        <Box
          sx={{
            display: {
              xs: placement === "header" ? "none" : "block",
              sm: placement === "header" ? "block" : "none",
            },
            margin: placement === "sidebar" ? 2 : 0,
          }}
        >
          <UserBoxButton
            fullWidth={placement === "sidebar"}
            ref={ref}
            onClick={() => setOpen(true)}
          >
            <Box sx={{ width: 40, height: 40 }}>
              <Avatar
                src={data.user?.image || ""}
                alt={data.user?.name || ""}
              />
            </Box>
            {placement === "header" && (
              <ExpandMoreTwoTone fontSize="small" sx={{ ml: 0.5 }} />
            )}
            {placement === "sidebar" && (
              <Box
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <UserBoxText>
                  <UserBoxLabel variant="body1">
                    @{data.user?.name}
                  </UserBoxLabel>
                </UserBoxText>
                <UnfoldMoreTwoTone
                  fontSize="small"
                  sx={{ ml: 1 }}
                  color="warning"
                />
              </Box>
            )}
          </UserBoxButton>
          <UserDropdown
            isOpen={isOpen}
            anchorEl={ref.current}
            setOpen={setOpen}
            data={data}
          />
        </Box>
      )}
    </Box>
  );
}

const UserBoxButton = styled(Button)(({ theme }: CoDriverTheme) => ({
  paddingLeft: theme?.spacing(1),
  paddingRight: theme?.spacing(0),
  color: theme?.colors?.alpha.trueWhite[70],
}));

const UserBoxText = styled(Box)(({ theme }: CoDriverTheme) => ({
  textAlign: "left",
  paddingLeft: theme?.spacing(1),
}));

const UserBoxLabel = styled(Typography)(({ theme }: CoDriverTheme) => ({
  fontWeight: 600,
  color: theme?.palette.primary.main,
  display: "block",
}));

const UserBoxDescription = styled(Typography)(({ theme }: CoDriverTheme) => ({
  color: lighten(theme?.palette.primary.main as string, 0.5),
  fontWeight: theme?.typography.fontWeightMedium,
}));

export default UserBox;
