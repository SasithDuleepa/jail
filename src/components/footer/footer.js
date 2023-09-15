// Footer.js
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import "./footer.css"; 

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="container">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is Sri Lanka jail web store. Using that web site you can delivel essencial items for your family members who are in jail at the moment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Prison Headquarters, No.150, Baseline Road, Colombo 09, Sri Lanka.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: prisons[at]sltnet.lk
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +94 114 677177
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fax : +94 114 677180
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit" className="link-icon">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/" color="inherit" className="link-icon">
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" className="link-icon">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="http://prisons.gov.lk/">
              Department of Prison
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
