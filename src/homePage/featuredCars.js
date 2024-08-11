import React, { useEffect, useState } from "react";
///carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Grid, Container, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/////

//tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
//

//tabs
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
////////
const FeaturedCars = () => {
  const navigate = useNavigate();
  const { mainArray, FeaturedCarsData, carData } = useSelector(
    (store) => store.car
  );

  //
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /////////

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slickSlide: {
      display: "flex",
      justifyContent: "space - between",
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          initialSlide: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          width: 50,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgray",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray" }}
        onClick={onClick}
      />
    );
  }

  //////

  return (
    <Container>
      <Grid item>
        <Typography component={"h6"} variant="h6" sx={{ marginTop: "25px" }}>
          Featured Cars
        </Typography>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Grid container sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid item x>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="TRENDING"
                {...a11yProps(0)}
                sx={{ padding: { xs: "0" } }}
              />
              <Tab
                label="POPULAR"
                {...a11yProps(1)}
                sx={{ padding: { xs: "0" } }}
              />
              <Tab
                label="UPCOMING"
                {...a11yProps(2)}
                sx={{ padding: { xs: "0" } }}
              />
            </Tabs>
          </Grid>
        </Grid>
        <CustomTabPanel value={value} index={0}>
          <Grid xs className="slider-container">
            <Slider {...settings}>
              {FeaturedCarsData.map((car) => {
                return (
                  car.trendingCarList && (
                    <Grid
                      container
                      sx={{
                        border: "1px solid #e1e1e1",
                      }}
                    >
                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate(`/carDetails/${car.model}`)}
                      >
                        <Grid item>
                          <Typography
                            component={"img"}
                            src={car.carImage}
                            sx={{ width: "100%" }}
                          ></Typography>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            padding: {
                              xs: "10px ",
                              sm: "15px",
                              backgroundColor: "whitesmoke",
                            },
                          }}
                        >
                          <Typography
                            component={"p"}
                            sx={{ fontWeight: "bold" }}
                          >
                            {car.model}
                          </Typography>
                          <Typography component={"p"}>
                            Rs. {car.priceStart} Lakh
                          </Typography>
                          <Typography component={"p"}>
                            Avg. Ex-Showrooom price
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              marginTop: "5px",
                              backgroundColor: "green",
                              fontSize: { xs: "10px", sm: "10px" },
                            }}
                            onClick={() => {
                              // navigate("/c");
                            }}
                          >
                            Show price in my city
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                );
              })}
            </Slider>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid xs className="slider-container">
            <Slider {...settings}>
              {FeaturedCarsData.map((car) => {
                return (
                  car.popularCarList && (
                    <Grid
                      container
                      sx={{
                        border: "1px solid #e1e1e1",
                      }}
                    >
                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate(`/carDetails/${car.model}`)}
                      >
                        <Grid item>
                          <Typography
                            component={"img"}
                            src={car.carImage}
                            sx={{ width: "100%" }}
                          ></Typography>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            padding: {
                              xs: "10px ",
                              sm: "15px",
                              backgroundColor: "whitesmoke",
                            },
                          }}
                        >
                          <Typography
                            component={"p"}
                            sx={{ fontWeight: "bold" }}
                          >
                            {car.model}
                          </Typography>
                          <Typography component={"p"}>
                            Rs. {car.priceStart} Lakh
                          </Typography>
                          <Typography component={"p"}>
                            Avg. Ex-Showrooom price
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              marginTop: "5px",
                              backgroundColor: "green",
                              fontSize: { xs: "10px", sm: "10px" },
                            }}
                            onClick={() => {
                              // navigate("/c");
                            }}
                          >
                            Show price in my city
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                );
              })}
            </Slider>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid xs className="slider-container">
            <Slider {...settings}>
              {FeaturedCarsData.map((car) => {
                return (
                  car.upcomingCarList && (
                    <Grid
                      container
                      sx={{
                        border: "1px solid #e1e1e1",
                      }}
                    >
                      <Grid
                        item
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate(`/carDetails/${car.model}`)}
                      >
                        <Grid item>
                          <Typography
                            component={"img"}
                            src={car.carImage}
                            sx={{ width: "100%" }}
                          ></Typography>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            padding: {
                              xs: "10px ",
                              sm: "15px",
                              backgroundColor: "whitesmoke",
                            },
                          }}
                        >
                          <Typography
                            component={"p"}
                            sx={{ fontWeight: "bold" }}
                          >
                            {car.model}
                          </Typography>
                          <Typography component={"p"}>
                            Rs. {car.priceStart} Lakh
                          </Typography>
                          <Typography component={"p"}>
                            Avg. Ex-Showrooom price
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              marginTop: "5px",
                              backgroundColor: "green",
                              fontSize: { xs: "10px", sm: "10px" },
                            }}
                            onClick={() => {
                              // navigate("/c");
                            }}
                          >
                            Show price in my city
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                );
              })}
            </Slider>
          </Grid>
        </CustomTabPanel>
      </Grid>
    </Container>
  );
};

export default FeaturedCars;
