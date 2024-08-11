import { Container, Grid, Button, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./homePage/navbar";
import Typography from "@mui/material/Typography";
import CompareDataTable from "./compareDataTable";
import CompareCars from "./homePage/compareCars";
import CompareCarsData from "./homePage/compareCarsData";

const ComparePage = () => {
  const { compareDataOne, compareDataTwo } = useSelector((store) => store.car);

  useEffect(() => {
    console.log(compareDataOne, compareDataTwo);
  }, []);

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ marginTop: "75px" }}>
        <Grid container item>
          {/* -------------------section-1 start --------------------*/}
          <Grid xs={12} item>
            {Object.entries(compareDataOne).length > 0 &&
            Object.entries(compareDataTwo).length > 0 ? (
              <Typography component={"h6"} varaiant="h6">
                {compareDataOne.carVarientTypes} VS{" "}
                {compareDataTwo.carVarientTypes}
              </Typography>
            ) : (
              <Typography component={"h6"} varaiant="h6">
                Compare Cars
              </Typography>
            )}
          </Grid>

          {/* <CompareCars /> */}
          <CompareCarsData />

          {/* -------------------section-1 end--------------------*/}

          {/* -------------------section-2 start --------------------*/}

          {/* {Object.entries(compareDataOne).length > 0 &&
          Object.entries(compareDataTwo).length > 0 ? (
            <Grid container item>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px ",
                }}
              >
                <Tabs>
                  <Tab
                    label="SPECIFICATIONS"
                    sx={{ borderBottom: "2px solid green" }}
                  />
                  <Tab label="FEATURES" />
                  <Tab label="BROCHURE" />
                  <Tab label="EXPERT OPINION" />
                  <Tab label="COLOURS" />
                </Tabs>
              </Grid>
            </Grid>
          ) : (
            <Grid></Grid>
          )} */}

          {/*-------------------table division start------------------------*/}
          <Grid item xs={12}>
            <CompareDataTable />
          </Grid>
          {/*--------------------- table end------------------------*/}
        </Grid>
      </Container>
    </>
  );
};

export default ComparePage;
