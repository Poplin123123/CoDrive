// import { OmediaTheme } from "@/theme/base";
import { Avatar as MuiAvatar, AvatarProps, styled } from "@mui/material";

interface IProps {
  variant?: "square" | "rounded" | "circular";
  outline?: string;
  src: string;
  alt: string;
  props?: AvatarProps;
}

function Avatar({ variant = "circular", src, alt, props }: IProps) {
  return <CustomAvatar variant={variant} src={src} alt={alt} {...props} />;
}

export default Avatar;

const CustomAvatar = styled(MuiAvatar)(() => ({
  width: "100%",
  height: "100%",
  "&.MuiAvatar-colorDefault": {
    // backgroundColor: theme?.palette.grey[500],
    backgroundColor: "gray",
  },
}));
