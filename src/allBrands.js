import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllBrands = () => {
  const navigate = useNavigate();

  const { allBrands, mainArray } = useSelector((store) => store.car);
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid item container sx={{ margin: "25px 0px" }}>
          <Grid item xs={12} sx={{ marginBottom: "10px" }}>
            <Typography component={"h6"} variant="h6">
              All Brands
            </Typography>
          </Grid>

          <Grid item container xs>
            <Grid
              xs
              container
              // sx={{ overflow: "hidden" }}
              className={expand ? "isExpand" : "isNotExpand"}
            >
              {mainArray.map((brand) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
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
                  onClick={() => navigate(`/cars/${brand.carBrand}`)}
                >
                  <Grid item>
                    <Typography
                      component={"img"}
                      src={brand.carBrandImage}
                      width="50%"
                    ></Typography>
                  </Grid>
                  <Grid item>
                    <Typography component={"p"}>{brand.carBrand}</Typography>
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
            onClick={() => handleExpand()}
          >
            View More Brands
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllBrands;
