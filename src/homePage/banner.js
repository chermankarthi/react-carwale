import { Grid, Typography, Input, Container, Box } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";

import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        className="bannerImage"
        minWidth="xs"
        sx={{ height: { xs: "100px", sm: "200px", md: "250px", lg: "400px" } }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: { xs: "flex-end", sm: "center" },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: {
                xs: "25px 0 0 0",
                sm: "115px 0 0 0",
                md: "150px 0 0 0",
                lg: "250px 0 0 0",
              },
            }}
          >
            <Typography
              varient="h1"
              sx={{
                color: "white",
                fontWeight: "700",
              }}
            >
              FIND THE RIGHT CAR
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              backgroundColor: "white",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "5px",
              margin: "0 auto",
            }}
          >
            <Grid item container>
              <Grid
                xs={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justfyContent: "center",
                  padding: { xs: "0 5px" },
                }}
              >
                <BsSearch />
              </Grid>
              <Grid xs={8}>
                <Input
                  sx={{
                    backgroundColor: "white",
                  }}
                  disableUnderline
                ></Input>
              </Grid>
            </Grid>

            <Grid xs sx={{ height: { xs: "40%", md: "100%" } }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#e53012",
                  margin: "2px",
                  boxShadow: "none",
                  height: { xs: "40%", md: "100%" },
                  padding: "0 10px",
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
