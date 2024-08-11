import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "#f9f9f9",
          padding: "0",

          // color: "hsla(0,0%,100%,.5)",
        }}
      >
        <Container>
          <Grid item container maxWidth="lg">
            <Grid
              item
              container
              xs={12}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",

                margin: "25px 0",
              }}
            >
              <Grid
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginBottom: {
                    xs: "25px",
                    sm: "0",
                    md: "0",
                    lg: "0",
                    xl: "0",
                  },
                }}
              >
                <Link>
                  <FaFacebook size={25} />
                </Link>
                <Link>
                  <FaInstagram size={25} />
                </Link>
                <Link>
                  <FaYoutube size={25} />
                </Link>
                <Link>
                  <FaLinkedin size={25} />
                </Link>
                <Link>
                  <FaXTwitter size={25} />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"./apple_store.svg"}
                  width="25%"
                  sx={{ marginRight: "25px" }}
                ></Typography>
                <Typography
                  component={"img"}
                  src={"./play_store.svg"}
                  width="25%"
                  sx={{ marginRight: "25px" }}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Divider
          sx={{
            backgroundColor: "hsla(0,0%,100%,.5)",
          }}
        />
        <Container>
          <Grid item maxWidth="lg" container sx={{}}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Grid
                item
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"/footer_logo1.png"}
                  sx={{ width: "75%" }}
                ></Typography>
              </Grid>
              <Grid
                item
                xs
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"/footer_logo2.png"}
                  sx={{ width: "75%" }}
                ></Typography>
              </Grid>
              <Grid
                item
                xs
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"/footer_logo3.png"}
                  sx={{ width: "75%" }}
                ></Typography>
              </Grid>
              <Grid
                item
                xs
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"/footer_logo4.png"}
                  sx={{ width: "75%" }}
                ></Typography>
              </Grid>
              <Grid
                item
                xs
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"/footer_logo5.png"}
                  sx={{ width: "75%" }}
                ></Typography>
              </Grid>
              <Grid
                item
                xs
                xs={4}
                md={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component={"img"}
                  src={"/footer_logo6.png"}
                  sx={{ width: "75%" }}
                ></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "#002b51",
//           padding: "0px",
//           width: "100%",
//           color: "hsla(0,0%,100%,.5)",
//         }}
//       >
//         <Container>
//           <Grid item maxWidth="lg" container sx={{}}>
//             <Grid
//               item
//               xs={12}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexWrap: "wrap",
//               }}
//             >
//               <Grid item md={2} xs={4}>
//                 <Typography
//                   component={"img"}
//                   src={"/footer_logo1.png"}
//                   width="50%"
//                 ></Typography>
//               </Grid>
//               <Grid item md={2} xs={4}>
//                 <Typography
//                   component={"img"}
//                   src={"/footer_logo2.png"}
//                   width="50%"
//                 ></Typography>
//               </Grid>
//               <Grid item md={2} xs={4}>
//                 <Typography
//                   component={"img"}
//                   src={"/footer_logo3.png"}
//                   width="50%"
//                 ></Typography>
//               </Grid>
//               <Grid item md={2} xs={4}>
//                 <Typography
//                   component={"img"}
//                   src={"/footer_logo4.png"}
//                   width="50%"
//                 ></Typography>
//               </Grid>
//               <Grid item md={2} xs={4}>
//                 <Typography
//                   component={"img"}
//                   src={"/footer_logo5.png"}
//                   width="50%"
//                 ></Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//         <Divider
//           sx={{
//             backgroundColor: "hsla(0,0%,100%,.5)",
//           }}
//         />
//         <Container>
//           <Grid item container maxWidth="lg" sx={{ padding: "25px 100px" }}>
//             <Grid
//               item
//               xs={12}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-evenly",

//                 padding: "0px",
//               }}
//             >
//               <Grid
//                 item
//                 md={6}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <Grid
//                   item
//                   md={12}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",

//                     flexWrap: "wrap",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <Typography variant="p">Language</Typography>
//                   <Typography variant="p" sx={{ marginLeft: "10px" }}>
//                     English
//                   </Typography>
//                   <Typography variant="p" sx={{ marginLeft: "10px" }}>
//                     Tamil
//                   </Typography>
//                 </Grid>
//                 <Grid item md={6}>
//                   <Typography variant="p">About Us</Typography>
//                 </Grid>
//                 <Grid item md={6}>
//                   <Typography variant="p">Terms & Condition</Typography>
//                 </Grid>
//                 <Grid item md={6}>
//                   <Typography variant="p">Careers</Typography>
//                 </Grid>
//                 <Grid item md={6}>
//                   <Typography variant="p">Advertise</Typography>
//                 </Grid>
//               </Grid>
//               <Grid
//                 item
//                 md={6}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-evenly",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <Grid item md={12}>
//                   <Typography variant="p"> Download Mobile App</Typography>
//                 </Grid>
//                 <Grid item md={6}>
//                   <Typography
//                     component={"img"}
//                     src={"./app-store.svg"}
//                     width="50%"
//                     sx={{ marginRight: "25px" }}
//                   ></Typography>
//                 </Grid>
//                 <Grid item md={6}>
//                   <Typography
//                     component={"img"}
//                     src={"./play-store.svg"}
//                     width="50%"
//                   ></Typography>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//         <Divider
//           sx={{
//             backgroundColor: "hsla(0,0%,100%,.5)",
//           }}
//         />
//       </Box>
//     </>
//   );
// };
