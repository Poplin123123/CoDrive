import { ReactNode } from "react";
import { Typography, Box, styled } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { CoDriverTheme } from "@/theme/light";

type TitleColor =
  | "title.primary"
  | "title.secondary"
  | "title.info"
  | "title.main";

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | string;

interface TextTitle {
  type: "text";
  vars?: Record<string, unknown>;
  variant?: Variant;
  color?: TitleColor;
  fontWeight?: FontWeight;
  text: string;
  fontSize?: string | number;
  gap?: string | number;
}

interface ContentTitle {
  type: "jsx";
  jsx: ReactNode;
}

type TitleContent = TextTitle | ContentTitle;

interface IProps {
  content: TitleContent;
  subtitle?: TitleContent;
  children?: ReactNode;
  withLoading?: {
    state: boolean;
    component?: ReactNode;
  };
}

function Title({ content, subtitle, children, withLoading }: IProps) {
  let WithLoading;

  if (withLoading && content.type === "text") {
    WithLoading = (
      <Box position="relative">
        <Typography
          sx={{ display: "inline-block", marginBottom: content.gap }}
          variant={content.variant || "h1"}
          color={content.color || "textPrimary"}
          fontWeight={content.fontWeight || 700}
        >
          {content.text}
        </Typography>
        {withLoading.component && withLoading.component}
        <Dot
          sx={{
            opacity: withLoading.state ? 0 : 1,
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      </Box>
    );
  }

  return (
    <Box my={5}>
      {content.type === "text" ? (
        withLoading ? (
          WithLoading
        ) : (
          <Typography
            sx={{ marginBottom: content?.gap || 0 }}
            variant={content.variant || "h1"}
            color={content.color || "textPrimary"}
            fontWeight={content.fontWeight || 700}
          >
            {content.text}
          </Typography>
        )
      ) : (
        content.jsx
      )}
      {subtitle?.type === "text" ? (
        <Typography
          variant={subtitle.variant || "h1"}
          color={subtitle.color || "textPrimary"}
          fontWeight={subtitle.fontWeight || 700}
          fontSize={subtitle.fontSize || 21}
          mt={0.5}
        >
          {subtitle.text}
        </Typography>
      ) : (
        subtitle?.jsx
      )}
      {children}
    </Box>
  );
}

const Dot = styled("span")(({ theme }: CoDriverTheme) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: 20,
  height: 20,
  background: theme?.colors.primary.main,
  borderRadius: 1000,
  marginLeft: 3,
}));

export default Title;
