import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./homePage/navbar";
import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CarBrands = () => {
  const navigate = useNavigate();
  const { mainArray } = useSelector((store) => store.car);

  const params = useParams();

  const [similarBrand, setSimilarBrand] = useState([]);
  const [popularBrand, setPopularBrand] = useState([]);
  const [pageArray, setPageArray] = useState([]);

  // console.log(params.carBrand, "params");
  // console.log(similarBrand, "similar");
  // console.log(popularBrand, "popular");
  // console.log(pageArray, "paageArray");

  // useEffect(() => {
  //   let similar = mainArray.filter(
  //     (car) => car.similarBrand && params.carBrand !== car.carBrand
  //   );
  //   setSimilarBrand(similar);
  //   let popular = mainArray.filter(
  //     (car) => car.popularBrand && params.carBrand !== car.carBrand
  //   );
  //   setPopularBrand(popular);
  // }, []);

  useEffect(() => {
    var a = [];
    var similar = [];
    var popular = [];
    mainArray.map((value) => {
      if (value.similarBrand && params.carBrand !== value.carBrand) {
        similar.push(value);
      }
      if (value.popularBrand && params.carBrand !== value.carBrand) {
        popular.push(value);
      }

      if (value.carBrand === params.carBrand) {
        console.log(value.carBrand, "value");
        return value.carArray.map((v) => {
          console.log(Object.values(v)[0][0], "filter");
          return a.push(Object.values(v)[0][0]);
        });
      }
    });
    // console.log(a, "a");
    // console.log(similar, "similar");
    setPageArray(a);
    setSimilarBrand(similar);
    setPopularBrand(popular);
  });

  const [extra, setExtra] = useState();
  console.log(extra);

  //
  const [expandSimilarBrand, setExpandSimilarBrand] = useState(false);
  const [expandPopularBrand, setExpandPopularBrand] = useState(false);
  const handleSimilarBrandExpand = () => {
    setExpandSimilarBrand(!expandSimilarBrand);
  };
  const handlePopularBrandExpand = () => {
    setExpandPopularBrand(!expandPopularBrand);
  };
  //
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "75px" }} maxWidth="lg">
        <Grid container spacing={2}>
          <>
            <Grid xs={12} item>
              <Typography variant="h6" component={"h6"}>
                {params.carBrand} Car Models
              </Typography>
            </Grid>
            {/* ----------------brands models------------ */}
            <Grid xs={12} md={7} item>
              {pageArray.map((car, i) => (
                <>
                  <Grid
                    container
                    sx={{
                      border: "1px solid #e1e1e1",
                      borderCollapse: "collapse",
                      marginBottom: "25px",
                      padding: { md: "15px" },
                    }}
                  >
                    <Grid
                      item
                      xs={6}
                      onClick={() => navigate(`/carDetails/${car.model}`)}
                      sx={{ cursor: "pointer" }}
                    >
                      <Typography
                        component={"img"}
                        src={car?.carImage}
                        width="100%"
                      ></Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={12}>
                        <Typography
                          component={"p"}
                          varient="p"
                          sx={{ fontWeight: "600" }}
                        >
                          {car?.model}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component={"p"} varient="p">
                          {car?.mileage}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component={"p"}
                          varient="p"
                          sx={{ fontWeight: "900" }}
                        >
                          RS. {car?.priceStart} lakh onwards
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          component={"p"}
                          varient="p"
                          sx={{ color: "#0979b6" }}
                        >
                          Get Best offer
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Grid>

            <Grid xs={12} md={5} item>
              <Grid container spacing={2}>
                {/* ----------------similar------------ */}
                <Grid xs={12} item>
                  <Grid item container xs={12} spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" component={"h6"}>
                        Similar Brands
                      </Typography>
                    </Grid>
                    <Grid
                      xs
                      item
                      container
                      // sx={{ overflow: "hidden" }}
                      className={
                        expandSimilarBrand ? "isExpand" : "isNotExpand"
                      }
                    >
                      {similarBrand.map((brand) => (
                        <Grid
                          item
                          // xs
                          xs={6}
                          sm={4}
                          md={3}
                          sx={{
                            borderCollapse: "collapse",
                            border: "1px solid #e1e1e1",
                            textAlign: "center",
                            // padding: "20px 0px ",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            overflow: "hidden",
                            height: "100px",
                            maxHeight: "100px",
                          }}
                          onClick={() => {
                            navigate(`/cars/${brand.carBrand}`);
                          }}
                        >
                          <Grid item>
                            <Typography
                              component={"img"}
                              src={brand?.carBrandImage}
                              width="50%"
                            ></Typography>
                          </Grid>
                          <Grid item>
                            <Typography component={"p"}>
                              {brand?.carBrand}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      borderCollapse: "collapse",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",

                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    onClick={() => handleSimilarBrandExpand()}
                  >
                    View More Brands
                  </Grid>
                </Grid>

                {/* ----------------popular------------ */}

                <Grid xs={12} item>
                  <Grid container xs={12} item>
                    <Grid item xs={12}>
                      <Typography variant="h6" component={"h6"}>
                        Popular Brands
                      </Typography>
                    </Grid>
                    <Grid
                      xs
                      container
                      // sx={{ overflow: "hidden" }}
                      className={
                        expandPopularBrand ? "isExpand" : "isNotExpand"
                      }
                    >
                      {popularBrand.map((brand) => (
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={3}
                          sx={{
                            borderCollapse: "collapse",
                            border: "1px solid #e1e1e1",
                            textAlign: "center",
                            // padding: "20px 0px ",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            overflow: "hidden",
                            height: "100px",
                            maxHeight: "100px",
                          }}
                          onClick={() => {
                            navigate(`/cars/${brand.carBrand}`);
                          }}
                        >
                          <Grid item>
                            <Typography
                              component={"img"}
                              src={brand?.carBrandImage}
                              width="50%"
                            ></Typography>
                          </Grid>
                          <Grid item>
                            <Typography component={"p"}>
                              {brand?.carBrand}
                            </Typography>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      borderCollapse: "collapse",
                      border: "1px solid #e1e1e1",
                      textAlign: "center",

                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    onClick={() => handlePopularBrandExpand()}
                  >
                    View More Brands
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        </Grid>
      </Container>
    </>
  );
};

export default CarBrands;
