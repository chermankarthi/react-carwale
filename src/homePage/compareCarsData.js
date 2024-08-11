import React, { useEffect, useState } from "react";
import CompareCarsDataOne from "../compareCarsDataOne";
import CompareCarsDataTwo from "../compareCarsDataTwo";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const CompareCarsData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locations, setLocations] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setLocations(true);
    } else {
      setLocations(false);
    }
  }, []);

  const { compareDataOne, compareDataTwo } = useSelector((store) => store.car);
  console.log(compareDataOne, "one");
  console.log(compareDataTwo, "two");
  return (
    <Container>
      <Grid container sx={{margin:"25px 0"}}>
        <Grid container>
          {locations && (
            <Grid item xs={12}>
              <Typography component={"h6"} variant="h6">
                Compare Cars
              </Typography>
              <Typography
                component={"p"}
                variant="p"
                sx={{ marginBottom: "25px" }}
              >
                Important decisions like car purchase are often confusing. The
                “Compare Cars” tool from CarWale is designed to help you in car
                comparison on the basis of prices, mileage, power, performances
                and hundreds of other features and specifications. Our car
                comparison tool now comes with enhanced capabilities to compare
                cars at version level.
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid container xs={12}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              border: "1px solid #E1E1E1",
              borderCollapse: "collapse",
            }}
          >
            <CompareCarsDataOne />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              border: "1px solid #E1E1E1",
              borderCollapse: "collapse",
            }}
          >
            <CompareCarsDataTwo />
          </Grid>
        </Grid>

        <Grid container xs={12}>
          {locations && (
            <Button
              variant="contained"
              sx={{ backgroundColor: "red", marginTop: "25px" }}
              onClick={() => {
                navigate("/comparePage");
              }}
            >
              Compare
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompareCarsData;
