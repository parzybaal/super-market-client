import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const AddToCartButton = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const reduceCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      {count <= 0 ? (
        <Button
          variant="contained"
          sx={{
            padding: "15px",
            borderRadius: "25px",
            width: "200px",
            height: "50px",
            textTransform: "none",
            alignItems: "center",
            gap: "0.6rem",
            backgroundColor: "#38A34A",
            "&:hover": {
              backgroundColor: "#246D30",
            },
          }}
          onClick={() => incrementCount()}
        >
          <AddIcon sx={{ fontSize: 26 }} />
          <Typography display={"flex"} gap="0.4rem" fontSize={16} height={20}>
            Añadir al carrito
          </Typography>
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            padding: "7px",
            borderRadius: "25px",
            width: "200px",
            height: "50px",
            textTransform: "none",
            alignItems: "center",
            gap: "0.6rem",
            backgroundColor: "#38A34A",
            "&:hover": {
              backgroundColor: "#246D30",
            },
            justifyContent: "space-between",
          }}
        >
          <RemoveCircleIcon
            onClick={() => reduceCount()}
            sx={{ fontSize: 40 }}
          />
          <Typography>{count}</Typography>
          <AddCircleIcon
            onClick={() => incrementCount()}
            sx={{ fontSize: 40 }}
          />
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
