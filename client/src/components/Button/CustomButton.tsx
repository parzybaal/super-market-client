import { Button, Typography } from "@mui/material";
import React from "react";

interface Props {
  icon?: React.ReactElement;
  text: string;
  width?: string;
  fontSize?: number;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  variant?: "contained" | "outlined" | "text" | "custom";
  styles?: object;
}

const CustomButton: React.FC<Props> = ({
  icon,
  text,
  width = "180px",
  fontSize = 16,
  padding = "15px",
  backgroundColor = "#38A34A",
  color = "white",
  variant = "contained",
  styles = {},
}) => {
  return (
    <Button
      variant={variant === "custom" ? undefined : variant}
      sx={[
        {
          width,
          textTransform: "none",
          borderRadius: "25px",
          gap: "0.8rem",
          padding,
          backgroundColor,
          alignItems: "center",
          color,
          border: "none",
        },
        styles,
      ]}
    >
      <Typography display={"flex"} gap="0.4rem" fontSize={fontSize}>
        {icon}
        {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
