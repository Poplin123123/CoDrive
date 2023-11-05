import {
  Card,
  styled,
  Checkbox,
  FormGroup,
  Breakpoint,
  ButtonBase,
  FormControlLabel,
  Typography,
  Divider,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { HighlightOffTwoTone } from "@mui/icons-material";
import { CoDriverTheme } from "@/theme/light";

interface IProps {
  tags: string[];
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

function JobTags({ tags, filters, setFilters }: IProps) {
  return (
    <TagCard>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Label py={1}>Demands</Label>
        {filters.length > 1 && (
          <Tooltip arrow title="Clear Demands">
            <IconButton onClick={() => setFilters([])}>
              <HighlightOffTwoTone color="primary" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Divider sx={{ my: 1 }} />
      <FormGroup>
        {tags.map((tag) => (
          <ButtonBase
            key={tag}
            sx={(theme) => ({
              ".MuiTouchRipple-child": {
                backgroundColor: theme.palette.primary.dark,
              },
            })}
          >
            <TagCheckbox
              label={tag}
              control={
                <Checkbox
                  checked={filters.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters((prev) => [...prev, tag]);
                    } else {
                      setFilters((prev) => prev.filter((t) => t !== tag));
                    }
                  }}
                />
              }
            />
          </ButtonBase>
        ))}
      </FormGroup>
    </TagCard>
  );
}

export { JobTags };

const Label = styled(Typography)(({ theme }: CoDriverTheme) => ({
  color: theme?.colors.primary.main,
  fontSize: theme?.typography.pxToRem(16),
  paddingLeft: 9,
  fontWeight: "bold",
}));

const TagCard = styled(Card)(({ theme }: CoDriverTheme) => ({
  width: 380,
  height: "100%",
  padding: `${theme?.spacing(2)} ${theme?.spacing(1)}`,
  borderRadius: theme?.general.borderRadiusLg,

  [theme?.breakpoints.down("sm") as Breakpoint]: {
    display: "none",
  },
}));

const TagCheckbox = styled(FormControlLabel)(({ theme }: CoDriverTheme) => ({
  width: "100%",
  margin: 0,
  cursor: "pointer",

  ":hover": {
    borderRadius: theme?.general.borderRadiusLg,
    backgroundColor: theme?.colors.primary.lighter,
  },
}));
