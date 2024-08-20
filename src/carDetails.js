import {
  Box,
  Button,
  Container,
  Grid,
  gridClasses,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { TfiAngleRight } from "react-icons/tfi";
import { SlCallEnd } from "react-icons/sl";
import { LiaFileDownloadSolid } from "react-icons/lia";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./homePage/navbar";
import CarDetailsCarousel from "./carDetailsCarousel";

//
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//

const CarDetails = () => {
  const params = useParams();
  console.log(params, "params");
  console.log(params.model, "paramsModel");
  const navigate = useNavigate();
  const { mainArray } = useSelector((store) => store.car);
  const [pageData, setPagedata] = useState([]);
  const [currentCarArray, setcurrentCarArray] = useState([]);
  const [currentCarFilterArray, setcurrentCarFilterArray] = useState([]);
  const [pageLoadedArray, setPageLoadedArray] = useState([]);
  const [powerTrain, setPowerTrain] = useState([]);
  const [cityPrices, setCityPrices] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    mainArray.filter((v, i) => {
      return v.carArray.map((value, index) => {
        if (Object.keys(value)[0] === params.model) {
          setPagedata([Object.values(value)[0][0]]);
          // setcurrentCarArray(Object.values(value)[0]);
          setPageLoadedArray(Object.values(value)[0]);
          setPowerTrain(Object.values(value)[0][0].powerTrain);
          setCityPrices(Object.values(value)[0][0].cityPrices);
          setAllImages(Object.values(value)[0][0].allImages);
        }
      });
    });
  }, []);

  useEffect(() => {
    var filterItem = pageLoadedArray.filter((v, i) => {
      return i > 0;
    });
    setcurrentCarArray(filterItem);
    setcurrentCarFilterArray(filterItem);
  }, [pageLoadedArray]);

  const changeCarData = (getChangeCar) => {
    var filterItem = currentCarFilterArray.filter((v, i) => {
      return v.carVarientTypes !== getChangeCar.carVarientTypes;
    });
    setPagedata([getChangeCar]);
    setcurrentCarArray(filterItem);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "75px" }} maxWidth="lg">
        {pageData.map((car) => (
          <Grid container spacing={2} direction="row">
            {/* ----------------------------------------section-1------------------------------------------------------- */}
            <Grid container item>
              <Grid item xs={12}>
                <Typography variant="h6" component={"h6"}>
                  {car?.carDetailsHeading}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  cursor: "pointer",

                  // paddingBottom: { xs: "10px" },
                  borderCollapse: "collapse",
                  border: "1px solid #e1e1e1",
                }}
              >
                <CarDetailsCarousel params={params} car={car} />
              </Grid>
              <Grid item xs={12} md={6} sx={{ border: "1px solid #e1e1e1" }}>
                <Grid item container>
                  <Grid
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid #e1e1e1",
                      padding: "10px",
                    }}
                  >
                    <Grid>
                      <Typography component={"p"} variant="p">
                        Version
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{ fontWeight: "bold" }}
                      >
                        {car.version}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography component={"p"} variant="p">
                        <TfiAngleRight />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid #e1e1e1",
                      padding: "10px",
                    }}
                  >
                    <Grid item>
                      <Typography component={"p"} variant="p">
                        City
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{ fontWeight: "bold" }}
                      >
                        Show price in my city
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TfiAngleRight />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    component={"p"}
                    variant="p"
                    sx={{ paddingTop: "15px" }}
                  >
                    Rs. {car.priceStart}-{car.priceEnd} lakshs
                  </Typography>
                  <Typography
                    component={"p"}
                    variant="p"
                    sx={{ paddingTop: "15px" }}
                  >
                    Avg. Ex-Showrooom price
                  </Typography>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid item xs={8}>
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{ paddingTop: "15px" }}
                      >
                        Calculate your EMI
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{ paddingTop: "15px" }}
                      >
                        EMI calculator
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ paddingTop: "15px" }}>
                      Get EMI offers
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ paddingTop: "25px" }}>
                    <Button variant="contained" sx={{ backgroundColor: "red" }}>
                      Get Month Offers
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* ----------------------section-2-------------------------------------- */}
            <Grid
              container
              item
              justifyContent="center"
              alignItems="start"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography component={"h6"} variant="h6">
                  {car.model} Car Specifications
                </Typography>
              </Grid>

              {/* division1 */}
              <Grid xs={12} sm={10} md={8} container item>
                <Grid
                  item
                  xs={4}
                  sx={{
                    border: "1px solid #e1e1e1",
                    borderBottom: "none",
                    borderRight: "none",
                    padding: { xs: "5px", sm: "15px" },
                    minHeight: "100px",
                  }}
                >
                  <Typography component={"p"} variant="p">
                    Price
                  </Typography>
                  <Typography component={"p"} variant="p">
                    Rs. {car.priceStart} lakh onwards
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    border: "1px solid #e1e1e1",
                    borderBottom: "none",
                    borderRight: "none",
                    padding: { xs: "5px", sm: "15px" },
                    minHeight: "100px",
                  }}
                >
                  <Typography component={"p"} variant="p">
                    Mileage
                  </Typography>
                  <Typography component={"p"} variant="p">
                    {car.mileage}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    border: "1px solid #e1e1e1",
                    borderBottom: "none",
                    padding: { xs: "5px", sm: "15px" },
                    minHeight: "100px",
                  }}
                >
                  <Typography component={"p"} variant="p">
                    Engine
                  </Typography>
                  <Typography component={"p"} variant="p">
                    {car.engine}
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sx={{
                    border: "1px solid #e1e1e1",
                    padding: { xs: "5px", sm: "15px" },
                    minHeight: "100px",

                    borderRight: "none",
                  }}
                >
                  <Typography component={"p"} variant="p">
                    Fuel Type
                  </Typography>
                  <Typography component={"p"} variant="p">
                    {car.fuelType}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    border: "1px solid #e1e1e1",

                    borderRight: "none",
                    padding: { xs: "5px", sm: "15px" },
                    minHeight: "100px",
                  }}
                >
                  <Typography component={"p"} variant="p">
                    Transmission
                  </Typography>
                  <Typography component={"p"} variant="p">
                    {car.transmission}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    border: "1px solid #e1e1e1",
                    padding: { xs: "5px", sm: "15px" },
                    minHeight: "100px",
                  }}
                >
                  <Typography component={"p"} variant="p">
                    Seating Capacity
                  </Typography>
                  <Typography component={"p"} variant="p">
                    {car.seatingCapacity}
                  </Typography>
                </Grid>
              </Grid>
              {/* division2 */}
              <Grid item xs={12} sm={2} md={4}>
                <Grid item xs={12}>
                  <Typography
                    component={"img"}
                    src={car.adOne}
                    width="100%"
                  ></Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* -----------------------------------section-3--------------------------------------------------- */}
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12}>
                <Typography component={"h6"} variant="h6">
                  All New {car.model} Summary
                </Typography>
              </Grid>
              <Grid item xs={12} container spacing={2}>
                {/* division-1 */}
                <Grid item xs={12} md={8}>
                  <Grid item xs={12} spacing={2} container>
                    {/* sub division-1 */}
                    <Grid item xs={12}>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          border: "1px solid #e1e1e1",
                          backgroundColor: "#f9f9f9",
                          padding: "10px",
                        }}
                      >
                        <Grid item xs={12}>
                          <Typography
                            component={"p"}
                            variant="p"
                            sx={{ paddingBottom: "10px" }}
                          >
                            Latest Update
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography
                            component={"p"}
                            variant="p"
                            sx={{ paddingBottom: "10px" }}
                          >
                            New {car.model} launched; prices announced
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography
                            component={"p"}
                            variant="p"
                            sx={{
                              paddingBottom: "10px",
                              cursor: "pointer",
                              color: "#0979b6",
                            }}
                          >
                            Read More
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* sub division-2 */}
                    <Grid item xs={12}>
                      <Grid item xs={12}>
                        <Typography component={"h6"} variant="h6">
                          {car.model} Price
                        </Typography>
                        <Typography component={"p"} variant="p">
                          {car.model} price for the base model starts at Rs.{" "}
                          {car.priceStart} Lakh and the top model price goes
                          upto Rs. {car.priceEnd} Lakh (Avg. ex-showroom).{" "}
                          {car.modelShortName} price for
                          {car.variants} variants is listed below.
                        </Typography>
                        <Typography
                          component={"p"}
                          variant="p"
                          sx={{ cursor: "pointer", color: "#0979b6" }}
                        >
                          Read More
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        {currentCarArray.length > 0 && (
                          <Grid item xs={12}>
                            <Typography component={"h6"} variant="h6">
                              All Varients
                            </Typography>
                            <Grid item container>
                              {/* division-1 */}
                              <Grid item xs={12}>
                                {/* sub division-1 */}
                                <Grid
                                  item
                                  sx={{
                                    overflow: "auto",
                                  }}
                                >
                                  {currentCarArray.map((v, i) => (
                                    <>
                                      <Grid
                                        item
                                        sx={{
                                          border: "1px solid #e1e1e1",
                                          marginBottom: "10px",
                                          padding: "10px",
                                        }}
                                        onClick={() => changeCarData(v)}
                                      >
                                        <p>{v.carVarientTypes}</p>
                                        <p>{v.fuelType}</p>
                                      </Grid>
                                    </>
                                  ))}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>

                    {/* sub division-3 */}
                    <Grid item xs={12}>
                      <Grid
                        item
                        container
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          border: "1px solid #e1e1e1",
                          padding: "10px",
                        }}
                      >
                        <Grid item xs={2} md={1} sx={{ fontSize: "50px" }}>
                          <LiaFileDownloadSolid />
                        </Grid>
                        <Grid item xs={10} md={6}>
                          <Typography
                            component={"p"}
                            variant="p"
                            sx={{
                              fontWeight: "bold",
                              paddingBotoom: "10px",
                            }}
                          >
                            {car.model} 2023 Brochure
                          </Typography>
                          <Typography component={"p"} varient={"p"}>
                            Download the brochure in just one click to view{" "}
                            {car.model} price, specs and features of all the
                            variants
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={4}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "red" }}
                          >
                            Download Brochure
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* sub division-4 */}
                    <Grid item xs={12}>
                      <Typography component={"h6"} variant="h6">
                        {car.model} Mileage
                      </Typography>

                      <Typography
                        component={"p"}
                        variant="p"
                        sx={{ marginBottom: "10px" }}
                      >
                        {car.model} mileage claimbed by ARAI is
                      </Typography>
                      <Grid item xs={12}>
                        <TableContainer component={Paper}>
                          <Table xs={12} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell component="th" scope="column">
                                  Powertrain
                                </TableCell>
                                <TableCell component="th" scope="column">
                                  ARAI Mileage
                                </TableCell>

                                <TableCell component="th" scope="column">
                                  User Reported Mileage
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            {powerTrain.map((power, t) => (
                              <TableBody>
                                <TableRow>
                                  <TableCell>{power.power}</TableCell>
                                  <TableCell align="right">
                                    {power.mileageARAI}
                                  </TableCell>
                                  <TableCell align="right">
                                    {power.userReportedMileage}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            ))}
                          </Table>
                        </TableContainer>
                      </Grid>
                    </Grid>

                    {/* sub division-5 */}
                    <Grid item xs={12}>
                      <Grid item sx={{ marginBottom: "10px" }}>
                        <Typography component={"h6"} variant="h6">
                          {car.model} Images
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          position: "relative",
                        }}
                      >
                        {allImages.map((uuuu, uu) => (
                          <Grid item xs={4}>
                            <Typography
                              component={"img"}
                              src={uuuu.imag}
                              width="100%"
                            ></Typography>
                          </Grid>
                        ))}
                        <Grid item xs={2}>
                          <Typography
                            component={"p"}
                            variant="p"
                            sx={{
                              position: "absolute",
                              bottom: "0",
                              left: "0",
                              background: "rgb(0, 0, 0)",
                              background: "rgba(0, 0, 0, 0.5)",
                              color: "white",
                              width: "100%",
                            }}
                          >
                            View all images
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                {/* division-2 */}
                <Grid item xs={12} md={4}>
                  <Grid container item xs={12} spacing={2}>
                    {/* sub division-1 */}
                    <Grid item xs={12}>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          backgroundColor: "rgb(191, 235, 235)",
                          padding: "15px",
                        }}
                      >
                        <Grid
                          container
                          item
                          spacing={1}
                          xs={12}
                          sx={{
                            backgroundColor: "white",
                            padding: "5px",
                          }}
                        >
                          <Grid item xs={12}>
                            <Typography component={"p"} variant="p">
                              {car.brandName}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component={"p"} variant="p">
                              <SlCallEnd /> 123
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component={"p"} variant="p">
                              Get in touch with Authorized {car.brandname}
                              Dealership on call for best buying options like:
                            </Typography>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                            }}
                          >
                            <Grid item xs={6}>
                              <Typography component={"p"} variant="p">
                                Doorstep Demo
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography component={"p"} variant="p">
                                Offers and Discounts
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography component={"p"} variant="p">
                                Lowest Emi
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography component={"p"} variant="p">
                                Exchange Benefits
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component={"p"} variant="p">
                              Get The Best Deal
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* sub division-2 */}
                    <Grid item xs={12}>
                      <Grid xs={12}>
                        <Typography component={"h6"} variant="h6">
                          {car.model} Price in India
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          backgroundColor: "orange",
                        }}
                      >
                        <TableContainer component={Paper}>
                          <Table xs={12} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell component="th" scope="column">
                                  City
                                </TableCell>
                                <TableCell component="th" scope="column">
                                  On-Road Prices
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            {cityPrices.map((city, t) => (
                              <TableBody>
                                <TableRow>
                                  <TableCell component="td">
                                    {city.city}
                                  </TableCell>
                                  <TableCell key={t} component="td">
                                    {city.price}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            ))}
                          </Table>
                        </TableContainer>
                      </Grid>
                    </Grid>
                    {/* sub division-3 */}
                    <Grid item xs={12}>
                      <Typography
                        component={"img"}
                        src={car.adTwo}
                        width="100%"
                      ></Typography>
                    </Grid>
                    {/* sub division-4 */}
                    <Grid item xs={12}>
                      <Grid item xs={12}>
                        <Typography component={"h6"} variant="h6">
                          Car Buyer's Tools
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            border: "1px solid #e1e1e1",
                          }}
                        >
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",

                              padding: "20px",
                              borderBottom: "1px solid #e1e1e1",
                              minHeight: { xs: "125px" },
                              maxHeight: { xs: "125px" },
                            }}
                          >
                            <Grid item xs={3}>
                              <Typography
                                component={"img"}
                                src={
                                  "https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/car-loans-02.svg"
                                }
                                width="50%"
                              ></Typography>
                            </Grid>
                            <Grid item xs={9}>
                              <Typography component={"p"} variant="p">
                                Instant Car Loan
                              </Typography>
                              <Typography component={"p"} variant="p">
                                Apply and Get Best Car Loan Offers within
                                minutes
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "20px",
                              borderBottom: "1px solid #e1e1e1",
                              minHeight: { xs: "125px" },
                              maxHeight: { xs: "125px" },
                              alignItems: "center",
                            }}
                          >
                            <Grid item xs={3}>
                              <Typography
                                component={"img"}
                                src={
                                  "https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/locate-dealer.svg"
                                }
                                width="50%"
                              ></Typography>
                            </Grid>
                            <Grid item xs={9}>
                              <Typography component={"p"} variant="p">
                                Locate Dealers
                              </Typography>
                              <Typography component={"p"} variant="p">
                                Locate {car.brandName} Dealers
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "20px",
                              minHeight: { xs: "125px" },
                              maxHeight: { xs: "125px" },
                              alignItems: "center",
                            }}
                          >
                            <Grid item xs={3}>
                              <Typography
                                component={"img"}
                                src={
                                  "https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg"
                                }
                                width="50%"
                              ></Typography>
                            </Grid>
                            <Grid item xs={9}>
                              <Typography component={"p"} variant="p">
                                {car.brandName} Cars
                              </Typography>
                              <Typography component={"p"} variant="p">
                                Explore other {car.brandName} cars
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* -------------------------section-3 Link -------------------------------------*/}
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                component={"p"}
                variant="p"
                onClick={() => navigate(`/`)}
                sx={{ cursor: "pointer" }}
              >
                Home
              </Typography>

              <Typography component={"p"} variant="p">
                &#x3009;
              </Typography>

              <Typography
                component={"p"}
                variant="p"
                onClick={() => navigate(`/cars/${car.brandName}`)}
                sx={{ cursor: "pointer" }}
              >
                {car.car}
              </Typography>
              <Typography component={"p"} variant="p">
                &#x3009;
              </Typography>

              <Typography component={"p"} variant="p">
                {car.modelShortName}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default CarDetails;
