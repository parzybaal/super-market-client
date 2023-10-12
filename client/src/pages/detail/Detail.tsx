import { Divider, Stack, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "./components/Swipeable";
import { useLocation } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton";
import Product from "./models/product.interface";
import Visa from "./assets/visa.svg";
import Mastercard from "./assets/mastercard.svg";
import American from "./assets/americanexpress.svg";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddToCartButton from "./components/AddToCartButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import styles from "./styles/index";
import EllipsisText from "../../components/EllipsisText/EllipsisText";

const product: Product = {
  title:
    "Aire acondicionado Philco  split  frío/calor 2236 frigorías  blanco 220V - 240V PHS25HA3AN",
  category: [
    "Electrodomésticos y Aires Ac.",
    "Climatización",
    "Aires Acondicionados",
  ],
  price: 361399,
  discount: {
    text: "8% OFF",
    color: "GREEN",
    value: 8,
  },
  stock: "(6 disponibles)",
  description:
    "Capacidad de refrigeración de 2600W. | Capacidad de calefacción de 2600 W. | Frigorías: 2236. | Potencia de refrigeración de 810W y de calefacción de 733W. | Con función deshumidificación. | Eficiencia energética: A. | Cuenta con función de dormir. | Incluye control remoto. | Dimensiones de la unidad externa: 720mm de ancho x 495mm de alto x 270mm de profundidad. | Dimensiones de la unidad interna: 722mm de ancho x 290mm de alto x 187mm de profundidad. | Tiene temporizador. | Las imágenes pueden ser ilustrativas. | Las imágenes pueden ser ilustrativas.",
  offer_price: 332143,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_730415-MLA49542428777_042022-O.webp",
  gallery: {
    template: [
      "https://http2.mlstatic.com/D_NQ_NP_730415-MLA49542428777_042022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_686625-MLA49542428776_042022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_651231-MLA49542483237_042022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_609506-MLA49542486248_042022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_805419-MLA49542486250_042022-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_753551-MLU54985764021_052023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_617653-MLU69973927173_062023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_886741-MLU69972652235_062023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_886932-MLU69955904840_062023-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_694252-MLU69955904842_062023-O.webp",
    ],
  },
};

function Detail() {
  const location = useLocation();
  const id = location.pathname.slice(9); //I am looking for the id of the query params
  console.log(id);
  const [fav, setFav] = useState<number>(0);
  console.log(fav);

  return (
    <Stack sx={styles.container}>
      <SwipeableTextMobileStepper images={product.gallery.template} />
      <Stack gap="0.4rem">
        <EllipsisText title={product.title} lines={1} />
        <Typography
          color="rgba(0, 0, 0, 0.5)"
          sx={{ textDecoration: "line-through" }}
        >
          ${product.price}
        </Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={"1rem"}>
          <Typography variant="h4">${product.offer_price}</Typography>
          <Typography color={"#38A34A"}>${product.discount.text}</Typography>
        </Stack>
        <Typography color="rgba(0, 0, 0, 0.5)">
          en 12 x ${(product.offer_price / 12).toFixed(2)}
        </Typography>
        <Divider sx={{ margin: "0.4rem 0" }} />
        <Typography color="rgba(0, 0, 0, 0.5)">
          Stock: {product.stock}
        </Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={"2rem"}>
          <AddToCartButton />
          <Stack
            flexDirection={"row"}
            gap={"0.7rem"}
            onClick={() => {
              setFav(1);
              alert("Se añadió a favoritos, no me maten por el alert");
            }}
            sx={{ cursor: "pointer" }}
          >
            <FavoriteIcon sx={{ color: "red" }} />
            <Typography>Marcar como favorito</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ margin: "0.8rem 0" }} />
        <EllipsisText title={product.description} lines={5} />
        <Stack gap={"0.4rem"}>
          <Typography>
            <span style={{ fontWeight: "bold" }}>12</span> cuotas de
            <span style={{ fontWeight: "bold" }}>
              {` $${(product.offer_price / 12).toFixed(2)}`}
            </span>
          </Typography>
          <Stack flexDirection={"row"} gap={"0.4rem"}>
            <img src={Visa} alt="Visa card" width={36} />
            <img src={Mastercard} alt="Mastercard card" width={36} />
            <img src={American} alt="American card" width={36} />
            <CreditCardIcon sx={{ fontSize: 36, color: "#838383" }} />
          </Stack>
          <CustomButton
            text="Ver métodos de pago"
            width="170px"
            fontSize={12}
            padding="6px"
            backgroundColor="#4785FF"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Detail;
