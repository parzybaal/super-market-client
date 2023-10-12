import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Images from "./models/images.interface";
import styles from "./styles";

const SwipeableTextMobileStepper: React.FC<Images> = ({ images }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={styles.container}>
      <Carousel
        selectedItem={activeStep}
        onChange={handleStepChange}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
      >
        {images.map((step, index) => (
          <div key={index}>
            <img style={styles.img} src={step} />
          </div>
        ))}
      </Carousel>
      <Stack sx={styles.arrowContainer}>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeftIcon sx={{ fontSize: 50 }} />
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <KeyboardArrowRightIcon sx={{ fontSize: 50 }} />
        </Button>
      </Stack>
    </Box>
  );
};

export default SwipeableTextMobileStepper;
