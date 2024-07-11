import { styled } from "@mui/material/styles";

interface Props {
  progress: number;
}

import Stack from "@mui/material/Stack";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#BB374E" : "#308fe8",
  },
}));

export default function RedProgressBar({ progress }: Props) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress variant="determinate" value={progress} />
    </Stack>
  );
}
