import { Button, Container, Grid, Typography } from "@mui/material";
// import React, { useState } from "react";
import "../homePage/carChoiceFilter.css";
import { useNavigate } from "react-router-dom";

const carChoice = [
  {
    id: 1,
    price: 5,
    details: "under 5 lakh",
  },
  {
    id: 2,
    price: 6,
    details: "under 6 lakh",
  },
  {
    id: 3,
    price: 7,
    details: "under 7 lakh",
  },
  {
    id: 4,
    price: 8,
    details: "under 8 lakh",
  },
  {
    id: 5,
    price: 9,
    details: "under 9 lakh",
  },
  {
    id: 6,
    price: 10,
    details: "under 10 lakh",
  },
  {
    id: 7,
    price: 20,
    details: "under 20 lakh",
  },
  {
    id: 8,
    price: 30,
    details: "under 30 lakh",
  },
  {
    id: 9,
    price: 40,
    details: "under 40 lakh",
  },
  {
    id: 10,
    price: 50,
    details: "Luxury Cars",
  },
];

const CarChoiceFilter = () => {
  const navigate = useNavigate();

  // const [price, setPrice] = useState("");
  // const navigate = useNavigate();

  // const func = (amt) => {
  //   navigate(`/carItemFilter?price=5`);
  // };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: "10px" }}>
            <Typography variant="h6" component={"h6"}>
              Find The Cars Of Your Choice
            </Typography>
          </Grid>

          <Grid
            item
            container
            sx={{
              padding: "20px 0",
              backgroundColor: "whitesmoke",
              border: "1px solid #e1e1e1",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Grid
              item
              sx={{
                width: "95%",
                margin: "0 auto",
              }}
            >
              {carChoice.map((car) => (
                <>
                  {car.price < 50 ? (
                    <Button
                      className="btn"
                      sx={{
                        boxShadow: "none",
                        border: "1px solid #e1e1e1",
                        backgroundColor: "white",
                        borderRadius: "25px",
                        color: "black",
                        padding: "5px 20px",
                        margin: "10px 5px",
                        minWidth: "200px",
                      }}
                      onClick={() => navigate(`/carItemFilter/${car.price}`)}
                    >
                      Under {car.price} Lakh
                    </Button>
                  ) : (
                    <Button
                      className="btn"
                      sx={{
                        boxShadow: "none",
                        border: "1px solid #e1e1e1",
                        backgroundColor: "white",
                        borderRadius: "25px",
                        color: "black",
                        padding: "5px 20px",
                        margin: "10px 5px",
                        minWidth: "200px",
                      }}
                      onClick={() => navigate(`/carItemFilter/${car.price}`)}
                    >
                      Luxury Cars
                    </Button>
                  )}
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* <Container maxWidth="lg">
        <Grid
          item
          container
          sx={{
            margin: "25px 0px",
          }}
        >
          <Grid item xs={12} sx={{ marginBottom: "10px" }}>
            <Typography variant="h6" component={"h6"}>
              Find The Cars Of Your Choice
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ backgroundColor: "whitesmoke", padding: "10px" }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                className="btn"
                sx={{
                  boxShadow: "none",
                  border: "2px solid #e1e1e1",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  color: "black",
                  padding: "5px 20px",
                  margin: "10px 5px",
                }}
                onClick={() => {
                  setPrice("5");
                  func();
                }}
              >
                Under 5 Lakh
              </Button>
              <Button
                className="btn"
                sx={{
                  boxShadow: "none",
                  border: "2px solid #e1e1e1",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  color: "black",
                  padding: "5px 20px",
                  margin: "10px 5px",
                }}
              >
                Under 10 Lakh
              </Button>
              <Button
                className="btn"
                sx={{
                  boxShadow: "none",
                  border: "2px solid #e1e1e1",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  color: "black",
                  padding: "5px 20px",
                  margin: "10px 5px",
                }}
              >
                Under 20 Lakh
              </Button>
              <Button
                className="btn"
                sx={{
                  boxShadow: "none",
                  border: "2px solid #e1e1e1",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  color: "black",
                  padding: "5px 20px",
                  margin: "10px 5px",
                }}
              >
                Under 30 Lakh
              </Button>
              <Button
                className="btn"
                sx={{
                  boxShadow: "none",
                  border: "2px solid #e1e1e1",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  color: "black",
                  padding: "5px 20px",
                  margin: "10px 5px",
                }}
              >
                Luxury Cars
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
};

export default CarChoiceFilter;
