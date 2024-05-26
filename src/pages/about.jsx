import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Our application is designed to provide various numerical method algorithms to help users solve mathematical problems efficiently. We strive to make complex mathematical concepts more accessible by implementing user-friendly interfaces and clear explanations.
        </Typography>
       
        <Typography variant="body1" paragraph>
          If you have any questions, suggestions, or feedback, please feel free to contact us.
        </Typography>
        <Box mt={5}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">
                Mentor: Amit Medavi
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Head of Department: S.P. Kutar
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Project Team Members:
          </Typography>
          <Typography variant="body1">Vandana Suman</Typography>
          <Typography variant="body1">Akash Vaishnav</Typography>
          <Typography variant="body1">Abhishek Verma</Typography>
          <Typography variant="body1">Ashish Prajapati</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
