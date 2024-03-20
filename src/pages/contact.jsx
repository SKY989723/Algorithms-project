import React from "react";
import { Typography, Container, Box, TextField, Button, Grid } from "@mui/material";

const ContactUsPage = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! Please feel free to reach out to us with any questions, feedback, or inquiries you may have.
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                label="Your Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Your Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                name="message"
                label="Your Message"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth type="submit">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ContactUsPage;
