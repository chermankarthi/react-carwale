import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Grid, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CarDetailsCarousel = ({ params }) => {
  const { carData } = useSelector((store) => store.car);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray" }}
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
  return (
    <>
      <Container maxWidth="lg">
        {carData.map((car) => (
          <>
            {params.model === car.model && (
              <>
                <Slider {...settings}>
                  {car.carouselImages.map((carousel) => (
                    <>
                      <Grid item xs={12}>
                        <Typography
                          component={"img"}
                          src={carousel.carouselImage}
                          width="100%"
                        ></Typography>
                      </Grid>
                    </>
                  ))}
                </Slider>
              </>
            )}
          </>
        ))}
      </Container>
    </>
  );
};

export default CarDetailsCarousel;
