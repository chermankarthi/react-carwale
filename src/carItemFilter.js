import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./homePage/navbar";
import { Container, Grid, Typography } from "@mui/material";
import CarChoiceFilter from "./homePage/carChoiceFilter";
import { useSelector } from "react-redux";
import AllBrands from "./allBrands";

const CarItemFilter = () => {
  const params = useParams();
  console.log(params, "params");
  const { mainArray } = useSelector((store) => store.car);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  console.log(items);

  useEffect(() => {
    let x = [];
    mainArray.filter((v, i) => {
      return v.carArray.map((value, index) => {
        x.push(Object.values(value)[0][0]);
      });
    });
    setItems(x);
  }, []);

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ marginTop: "75px" }}>
        <Typography variant="h6" component={"h6"}>
          Best Cars Under {params.price} Lakh
        </Typography>
        <Grid container></Grid>

        <Grid item container sx={{ backgroundColor: "red" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              backgroundColor: "orange",
            }}
          >
            {items.map((car) => (
              <Grid
                xs={12}
                md={6}
                item
                onClick={() => navigate(`/carDetails/${car.model}`)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "green",
                }}
              >
                {car.priceStart < params.price && params.price <= 40 ? (
                  <Grid xs={12} sx={{ display: "flex" }}>
                    <Grid xs={6}>
                      <Typography
                        component={"img"}
                        src={car.carImage}
                        width="100%"
                      ></Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography variant="p" component={"p"}>
                        {car.model}
                      </Typography>
                      <Typography variant="p" component={"p"}>
                        Rs. {car.priceStart} Lakh
                      </Typography>
                      <Typography variant="p" component={"p"}>
                        Avg. Ex-Showroom price
                      </Typography>
                      <Typography variant="p" component={"p"}>
                        Show price in my city
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid xs={12}>
                    <Grid item xs={6}>
                      {car.priceStart > 40 && params.price > 40 && (
                        <Grid xs={12}>
                          <Grid xs={6}>
                            <Typography
                              component={"img"}
                              src={car.carImage}
                              width="50%"
                            ></Typography>
                          </Grid>
                          <Grid xs={6}></Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <CarChoiceFilter />

      <AllBrands />
    </>
  );
};

export default CarItemFilter;
