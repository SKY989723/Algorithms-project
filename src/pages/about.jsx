import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for the blurred overlay
const BlurredOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust opacity as needed
  backdropFilter: "blur(2px)", // Apply blur effect
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
});

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ position: "relative" }}>
      <BlurredOverlay>
        <Typography variant="h4" gutterBottom>
          This Page is Under Construction
        </Typography>
        <Typography variant="body1">
          We are working hard to bring you more information soon.
        </Typography>
      </BlurredOverlay>
      <Box mt={5}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Our application is designed to provide various numerical method algorithms to help users solve mathematical problems efficiently.
        </Typography>
        <Typography variant="body1" paragraph>
          We strive to make complex mathematical concepts more accessible by implementing user-friendly interfaces and clear explanations.
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions, suggestions, or feedback, please feel free to contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
