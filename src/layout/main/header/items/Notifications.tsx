import {
  Box,
  Link,
  alpha,
  Badge,
  Button,
  styled,
  Popover,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import { useRef, useState } from "react";
import { NotificationsActiveTwoTone } from "@mui/icons-material";
// import { OmediaTheme } from "@/theme/base";

function HeaderNotifications() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
      {/* <Tooltip arrow title="Notifications">
        <IconButtonPrimary
          color="primary"
          ref={ref}
          onClick={() => setOpen(true)}
        >
          <NotificationsBadge
            badgeContent={0}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsActiveTwoTone />
          </NotificationsBadge>
        </IconButtonPrimary>
      </Tooltip> */}
      <Popover
        anchorEl={ref.current}
        onClose={() => setOpen(false)}
        open={isOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2 }} display="flex" justifyContent="space-between">
          <Typography variant="h5">Notifications</Typography>
          <Link href="#" variant="caption" sx={{ textTransform: "none" }}>
            Mark all as read
          </Link>
        </Box>
        <Box sx={{ m: 1 }}>
          <Button color="secondary" fullWidth>
            View all notifications
          </Button>
        </Box>
      </Popover>
    </>
  );
}

// const NotificationsBadge = styled(Badge)(
//   ({ theme }) => `
//     .MuiBadge-badge {
//         background-color: ${theme?.palette.error.main};
//         color: ${theme?.palette.error.contrastText};
//         min-width: 18px;
//         height: 18px;
//         padding: 0;

//         &::after {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             border-radius: 50%;
//             box-shadow: 0 0 0 1px ${alpha(
//               theme?.palette.error.main as string,
//               0.3
//             )};
//             content: "";
//         }
//     }
// `
// );

// const IconButtonPrimary = styled(IconButton)(
//   () => `
//     margin-left: ${theme?.spacing(1)};
//     background: ${theme?.colors.alpha.trueWhite[100]};
//     color: ${theme?.palette.primary.light};
//     padding: 0;
//     width: 42px;
//     height: 42px;
//     border-radius: 100%;
//     transition: ${theme?.transitions.create(["background", "color"])};

//     &.active,
//     &:active,
//     &:hover {
//       background: ${alpha(theme?.colors.alpha.trueWhite[30] as string, 0.2)};
//       color: ${theme?.colors.alpha.trueWhite[100]};
//     }
// `
// );

export default HeaderNotifications;
