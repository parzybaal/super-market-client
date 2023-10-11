import { Typography } from "@mui/material";

interface Title {
  title: string;
  lines: number;
  styles?: object;
}

const EllipsisText: React.FC<Title> = ({ title, lines = 1, styles = {} }) => {
  return (
    <Typography
      sx={[
        {
          display: "-webkit-box",
          WebkitLineClamp: lines, // Número de líneas antes del elipsis
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        styles,
      ]}
    >
      {title}
    </Typography>
  );
};

export default EllipsisText;
