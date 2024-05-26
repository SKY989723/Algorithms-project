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
               Project Mentor:
              </Typography>
              <Typography variant="body1">
                Prof. AMIT MEDHAVI
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Head of Department:
              </Typography>
              <Typography variant="body1">
                Prof. S.P. KUTAR
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={5}>
          <Typography variant="h5" align="center" gutterBottom>
            Project Team Members:
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <Typography variant="body1">Akash Vaishnav(Web Developer)</Typography>
                <Typography variant="body1">Abhishek Verma(Web Developer)</Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="flex-end">
              <Typography variant="body1">Vandana Suman(Content Creator)</Typography>
                <Typography variant="body1">Ashish Prajapati(Content Creator)</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
