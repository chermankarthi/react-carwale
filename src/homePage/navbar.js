import React from "react";

import {
  AppBar,
  Grid,
  Input,
  Tab,
  Tabs,
  Box,
  Typography,
  Container,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { GrLocation } from "react-icons/gr";
import { BsTranslate } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import NavbarSmall from "../homePage/navbarSmall";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UseAutocomplete from "./navbarSearch";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.down("sm"));

  const { allBrands, carData } = useSelector((store) => store.car);

  const searchh = (e) => {
    var a = ["krishna", "cherman", "cherry"];

    var x = a.filter((val) => {
      return val.includes(e.target.value) ? val : "";
    });

    console.log(x);
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <AppBar
          sx={{ backgroundColor: "#fff", color: "black" }}
          className="navbar"
        >
          <Toolbar>
            {size ? (
              <Grid item container sx={{ placeItems: "center" }}>
                <Grid item xs={1}>
                  <NavbarSmall />
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    component={"img"}
                    src={
                      "https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
                    }
                    sx={{ width: "fill", cursor: "pointer", margin: "0 5px" }}
                    onClick={() => navigate("/")}
                  ></Typography>
                </Grid>

                <Grid item xs={6} sx={{ overFlow: "hidden" }}>
                  <UseAutocomplete />
                </Grid>

                <Grid
                  item
                  xs={1}
                  sx={{
                    fontSize: { xs: "20px", sm: "30px" },
                    textAlign: "center",
                  }}
                >
                  <GrLocation />
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                container
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item xs={2} sm={2} md={2} lg={3}>
                  <Typography
                    component={"img"}
                    src={
                      "https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
                    }
                    sx={{
                      width: "fill",
                      cursor: "pointer",
                      marginRight: { md: "20px", lg: "50px" },
                    }}
                    onClick={() => navigate("/")}
                  ></Typography>
                </Grid>

                <Grid item xs={5} sm={6} md={5.5} lg={4.5}>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",

                      margin: {
                        sm: "0 10px 0 0",
                        lg: "0 30px",
                      },
                    }}
                  >
                    <Tab
                      label="NEW CARS"
                      sx={{
                        padding: "0",
                        fontSize: { sm: "10px", md: "15px" },
                        lineHeight: "0",
                      }}
                    />
                    <Tab
                      label="USED CARS"
                      sx={{
                        padding: "0",
                        fontSize: { sm: "10px", md: "15px" },
                        lineHeight: "0",
                      }}
                    />
                    <Tab
                      label="REVIEW & NEWS"
                      sx={{
                        padding: "0",
                        fontSize: { sm: "10px", md: "15px" },
                        lineHeight: "0",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={3}
                  sm={2.5}
                  md={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <UseAutocomplete />
                </Grid>

                <Grid item xs={2} sm={1.5} md={1.5} lg={1.5}>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: { sm: "20px", md: "25px", lg: "30px" },
                    }}
                  >
                    <GrLocation
                      sx={{
                        margin: "0 5px 0 5px",
                        cursor: "pointer",
                      }}
                    />
                    <BsTranslate
                      sx={{
                        margin: "0 0 0 5px",
                        cursor: "pointer",
                      }}
                    />
                    <CgProfile
                      sx={{
                        margin: "0 0 0 5px",
                        cursor: "pointer",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;
