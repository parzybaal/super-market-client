import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Title {
  title: string;
  width: string;
}

const EllipsisText: React.FC<Title> = ({ title, width }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el estado del ancho de la ventana al cambiar el tamaño de la pantalla
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calcular el ancho en función del ancho de la ventana
  const calculatedWidth = windowWidth > 600 ? "1000px" : "100%";

  return (
    <Typography
      variant="h4"
      sx={{
        width: calculatedWidth,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {title}
    </Typography>
  );
};

export default EllipsisText;
