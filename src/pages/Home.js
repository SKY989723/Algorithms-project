import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card1 from "../component/Card1";
import Card2 from "../component/Card2";
import Card3 from "../component/Card3";
import Card4 from "../component/Card4";

import BisectionMethod from "../component/Bisection/BisectionPractical"
import BisectionTheory from "../component/Bisection/BisectionTheory"
import AboutPage from "./about";
import ContactUsPage from "./contact";
const Home = () =>{
      return <>
            <Grid container   spacing={4}>
                  <Grid item xs={12} md={6}>
                             <Card1/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                              <Card2/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                               <Card3/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                              <Card4/>
                  </Grid>
            </Grid>
            {/* <AboutPage/> */}
            {/* <ContactUsPage/> */}
            {/* <BisectionTheory/> */}
          {/* <BisectionMethod/> */}
          </>
}

export default Home;