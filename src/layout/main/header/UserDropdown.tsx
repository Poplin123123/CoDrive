import { useRouter } from "next/dist/client/router";
import {
  AccountBoxTwoTone,
  LockOpenTwoTone,
  ManageAccountsTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  lighten,
  styled,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { CoDriverTheme } from "@/theme/light";
import Avatar from "@/components/Avatar";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

type IProps = {
  // user: User;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  anchorEl: Element | null;
  data: Session;
};

function UserDropdown({ isOpen, setOpen, anchorEl, data }: IProps) {
  // const { sidebarToggle, toggleSidebar } = useSidebarContext();
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log(session, "session 11111");
  console.log(status, "status 11111");

  async function handleLogout() {
    const logout = await signOut({
      redirect: false,
    });
    if (logout) {
      router.push("/");
    }
  }

  function handleLinkClick() {
    setOpen(false);
    // if (sidebarToggle) {
    //   toggleSidebar();
    // }
  }

  return (
    <Popover
      anchorEl={anchorEl}
      onClose={() => setOpen(false)}
      open={isOpen}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Link href={`/user`} passHref legacyBehavior>
        <MenuUserBox
          sx={{ minWidth: 210 }}
          display="flex"
          onClick={handleLinkClick}
        >
          <Box sx={{ width: 40, height: 40 }}>
            <Avatar
              variant="rounded"
              src={data?.user?.image || ""}
              alt={data?.user?.name || ""}
            />
          </Box>
          <UserBoxText>
            <UserBoxLabel>{data?.user?.name || ""}</UserBoxLabel>
            <UserBoxDescription>@{data?.user?.name || ""}</UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
      </Link>
      <Divider sx={{ mb: 0 }} />
      <List sx={{ p: 1 }}>
        <Link href={`/user`} passHref legacyBehavior>
          <StyledMuiLink>
            <ListItem
              sx={{ pl: 0 }}
              button
              onClick={handleLinkClick}
              color="primary"
            >
              <AccountBoxTwoTone fontSize="small" />
              <ListItemText primary="Profile" />
            </ListItem>
          </StyledMuiLink>
        </Link>
        <Link href="/profile" passHref legacyBehavior>
          <StyledMuiLink>
            <ListItem
              sx={{ pl: 0 }}
              button
              onClick={handleLinkClick}
              color="primary"
            >
              <ManageAccountsTwoTone fontSize="small" />
              <ListItemText primary="Edit Profile" />
            </ListItem>
          </StyledMuiLink>
        </Link>
      </List>
      <Divider />
      <Box sx={{ m: 1 }}>
        <Button color="primary" fullWidth onClick={handleLogout}>
          <LockOpenTwoTone sx={{ mr: 1 }} />
          Sign out
        </Button>
      </Box>
    </Popover>
  );
}

const MenuUserBox = styled(Box)(({ theme }: CoDriverTheme) => ({
  background: theme?.colors.alpha.black[5],
  padding: theme?.spacing(2),
  cursor: "pointer",
}));

const UserBoxText = styled(Box)(({ theme }: CoDriverTheme) => ({
  textAlign: "left",
  paddingLeft: theme?.spacing(1),
}));

const UserBoxLabel = styled(Typography)(({ theme }: CoDriverTheme) => ({
  fontWeight: theme?.typography.fontWeightMedium,
  color: theme?.palette.primary.main,
  display: "block",
}));

const UserBoxDescription = styled(Typography)(({ theme }: CoDriverTheme) => ({
  color: lighten(theme?.palette.primary.main as string, 0.3),
}));

const StyledMuiLink = styled(MuiLink)({
  textDecoration: "none",
});

export default UserDropdown;
