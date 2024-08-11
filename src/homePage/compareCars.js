import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Link,
  Modal,
  Box,
  Input,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataOne,
  deleteDataOne,
  updateDataTwo,
  deleteDataTwo,
  updatecompareInputOne,
  updatecompareInputTwo,
  updatecompOne,
} from "../redux/slice";
import { useLocation, useNavigate } from "react-router-dom";

//

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GiCancel } from "react-icons/gi";
import {
  BorderAllOutlined,
  InputTwoTone,
  OutboxOutlined,
} from "@mui/icons-material";
//

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CompareCars = () => {
  const navigate = useNavigate();

  const {
    compareDataOne,
    compareDataTwo,
    compareInputOne,
    compareInputTwo,
    mainArray,
  } = useSelector((store) => store.car);
  const dispatch = useDispatch();

  const [arrayOne, setArrayOne] = useState([...mainArray]);
  const [arrayTwo, setArrayTwo] = useState([...arrayOne]);

  console.log(arrayTwo);

  const [isDuplicate, setIsDuplicate] = useState("");

  const getInput = (e) => {
    if (e.target.value.length !== 0) {
      if (compareInputOne.length == 0 || compareInputTwo.length == 0) {
        var gett = e.target.value.toLowerCase();
        var a = mainArray.filter((v, i) => {
          return v.carBrand.toLowerCase().includes(gett);
        });

        setArrayOne(a);
        setExpanded();
      }
      if (compareInputOne.length == 1 || compareInputTwo.length == 1) {
        var gett = e.target.value.toLowerCase();
        var a = arrayOne.filter((v, i) => {
          return Object.keys(v).toString().toLowerCase().includes(gett);
        });
        setArrayTwo(a);
      }
    } else {
      setArrayOne(mainArray);
    }
  };

  //search 1
  const [one, setOne] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [DeteltionOne, setDeteltionOne] = useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleDataOne = (data) => {
    dispatch(updateDataOne(data));
  };
  const handleDeleteDataOne = (data) => {
    console.log(data);
    dispatch(deleteDataOne(data));
    dispatch(updatecompareInputOne([]));
    setExpanded(false);
    setDeteltionOne(true);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    dispatch(updateDataOne({}));
    dispatch(updatecompareInputOne([]));
    setOpen1(true);
    setExpanded(false);
  };
  const handleClose1 = () => setOpen1(false);
  var accordinArray = [
    "panel1",
    "panel2",
    "panel3",
    "panel4",
    "panel5",
    "panel6",
    "panel7",
    "panel8",
    "panel9",
    "panel10",
    "panel11",
    "panel12",
    "panel13",
  ];
  const inputOneBrand = (accordinNum, brandOne) => {
    var oneCompare = [...compareInputOne];
    if (accordinNum === "one") {
      oneCompare = [brandOne];
      dispatch(updatecompareInputOne(oneCompare));
    } else if (accordinNum === "two") {
      oneCompare[1] = brandOne;
      dispatch(updatecompareInputOne(oneCompare));
    } else {
      oneCompare[2] = brandOne;
      dispatch(updatecompareInputOne(oneCompare));
      setIsDuplicate(brandOne);
    }
  };
  const deleteSpan = (index) => {
    setOne([]);
    if (index === 1) {
      var deleteCompare = [...compareInputOne];
      deleteCompare.splice(index, 1);
      dispatch(updatecompareInputOne(deleteCompare));
    } else {
      dispatch(updatecompareInputOne([]));
      setExpanded(false);
      setDeteltionOne(true);
    }
  };

  // searchh 2
  const [two, setTwo] = useState([]);
  const [open2, setOpen2] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = useState(false);
  const [DeteltionTwo, setDeteltionTwo] = useState(true);
  var accordinArrayTwo = [
    "panel1",
    "panel2",
    "panel3",
    "panel4",
    "panel5",
    "panel6",
    "panel7",
    "panel8",
    "panel9",
    "panel10",
    "panel11",
    "panel12",
    "panel13",
  ];

  const handleChangeTwo = (panel) => (event, isExpanded) => {
    setExpandedTwo(isExpanded ? panel : false);
  };
  const handleDataTwo = (data) => {
    dispatch(updateDataTwo(data));
  };
  const handleDeleteDataTwo = (data) => {
    dispatch(updatecompareInputTwo([]));
    dispatch(deleteDataTwo(data));
    setExpandedTwo(false);
    setDeteltionTwo(true);
  };
  const handleOpen2 = () => {
    dispatch(updatecompareInputTwo([]));
    dispatch(updateDataTwo({}));
    setOpen2(true);
    setExpandedTwo(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
    setDeteltionTwo(true);
  };
  const inputTwoBrand = (accordinNum, brandTwo) => {
    var twoCompare = [...compareInputTwo];

    if (accordinNum === "one") {
      twoCompare = [brandTwo];
      dispatch(updatecompareInputTwo(twoCompare));
    } else if (accordinNum === "two") {
      twoCompare[1] = brandTwo;
      dispatch(updatecompareInputTwo(twoCompare));
    } else {
      twoCompare[2] = brandTwo;
      dispatch(updatecompareInputTwo(twoCompare));
      setIsDuplicate(brandTwo);
    }
  };
  const deleteSpanTwo = (index) => {
    setTwo([]);
    if (index === 1) {
      var deleteCompare = [...compareInputTwo];
      deleteCompare.splice(index, 1);
      dispatch(updatecompareInputTwo(deleteCompare));
    } else {
      dispatch(updatecompareInputTwo([]));
      setExpandedTwo(false);
    }
  };

  const location = useLocation();
  const [locations, setLocations] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setLocations(true);
    } else {
      setLocations(false);
    }
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        {locations ? (
          <>
            <Typography component={"h6"} variant="h6">
              Compare Cars
            </Typography>
            <Typography component={"p"} variant="p">
              Important decisions like car purchase are often confusing. The
              “Compare Cars” tool from CarWale is designed to help you in car
              comparison on the basis of prices, mileage, power, performances
              and hundreds of other features and specifications. Our car
              comparison tool now comes with enhanced capabilities to compare
              cars at version level.
            </Typography>
          </>
        ) : (
          ""
        )}

        <Grid item container>
          <Grid
            xs={12}
            md={6}
            sx={{
              border: "1px solid #E1E1E1",
              borderCollapse: "collapse",
              padding: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {compareInputOne.length !== 3 ? (
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Link
                  component={"img"}
                  src={
                    " https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg"
                  }
                  width="10%"
                  onClick={handleOpen1}
                ></Link>
                <Grid item>
                  <Modal
                    open={open1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Grid sx={style}>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Select Your Brand or Model
                        </Typography>
                        <button onClick={handleClose1}>x</button>
                      </Grid>
                      {/* search code  */}
                      {/* <Grid
                        item
                        xs={12}
                        sx={{
                          border: "1px solid black",
                          mt: 2,
                          padding: "10px 0px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <BsSearch style={{ padding: "0px 15px" }} />

                        {compareInputOne.map((v, i) => {
                          return (
                            <Grid
                              item
                              style={{
                                border: "none",
                                padding: "5px",
                                width: "100%",
                                fontSize: "14px",
                                // borderRadius: "4px",
                                cursor: "pointer",
                                outline: "none",
                                diplay: "flex",
                                justifyContent: "space-between",
                              }}
                              key={{ i }}
                            >
                              {v}
                              <GiCancel
                                style={{ padding: "0px 0px 0px 5px" }}
                                onClick={() => deleteSpan(i)}
                              />
                            </Grid>
                          );
                        })}

                        {compareInputOne.length == 0 ? (
                          <input
                            type="text"
                            sx={{
                              width: "80%",
                              border: "none",
                              outine: "none",
                            }}
                            onInput={(e) => getInput(e)}
                          ></input>
                        ) : (
                          ""
                        )}

                        {compareInputOne.length == 1 ? (
                          <input
                            type="text"
                            sx={{
                              width: "80%",
                              border: "none",
                              outine: "none",
                            }}
                          ></input>
                        ) : (
                          ""
                        )}
                      </Grid> */}
                      {/* ---------------------------------------------------------------- */}
                      <Grid
                        container
                        columnSpacing={1}
                        xs={12}
                        sx={{
                          border: "1px solid black",
                          mt: 2,
                          padding: "10px 0px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Grid item xs={2}>
                          <BsSearch style={{ padding: "0px 15px" }} />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          columnSpacing={1}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          {compareInputOne.length > 0 &&
                            compareInputOne.map((v, i) => {
                              return (
                                <Grid
                                  item
                                  columnSpacing={1}
                                  xs={compareDataOne.length >= 1 ? 12 : 6}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                  }}
                                  key={{ i }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      padding: "5px",
                                      display: "flex",
                                      maxWidth: "130px",
                                      flexWrap: "no-wrap",
                                      justifyContent: "space-evenly",
                                      alignItems: "center",
                                      border: "1px solid black",
                                      borderRadius: "25px",
                                    }}
                                  >
                                    <Typography
                                      sx={{ maxWidth: "100px" }}
                                      component={"p"}
                                      variant="p"
                                    >
                                      {v}
                                    </Typography>
                                    <GiCancel
                                      style={{ padding: "0px 0px 0px 5px" }}
                                      onClick={() => deleteSpan(i)}
                                    />
                                  </Box>
                                </Grid>
                              );
                            })}

                          {compareInputOne.length == 0 && (
                            <Grid item xs={12}>
                              <Input
                                type="text"
                                placeholder="Enter your brand or model"
                                sx={{}}
                                disableUnderline
                                // onInput={(e) => getInput(e)}
                                onChange={(e) => getInput(e)}
                              ></Input>
                            </Grid>
                          )}

                          {compareInputOne.length == 1 && (
                            // <input
                            //   type="text"
                            //   sx={{
                            //     width: "80%",
                            //     border: "none",
                            //     outine: "none",
                            //     fieldset: { border: "none" },
                            //   }}
                            // ></input>
                            <Grid item xs={6}>
                              <Input
                                type="text"
                                placeholder="Type model"
                                disableUnderline
                                onChange={(e) => getInput(e)}
                              ></Input>
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                      {/* --------------------------------------------*/}
                      {DeteltionOne ? (
                        <Grid item xs={12}>
                          {compareInputOne.length == 2 ? (
                            <Grid>
                              {one.map((v, i) => (
                                <>
                                  {compareInputOne.length == 2 &&
                                  isDuplicate !== v.carVarientTypes ? (
                                    <Box SX={{}} key={{ i }}>
                                      <Typography
                                        onClick={() => {
                                          inputOneBrand(
                                            "three",
                                            v.carVarientTypes
                                          );
                                          handleDataOne(v);
                                          handleClose1(true);
                                        }}
                                        sx={{
                                          cursor: "pointer",
                                          borderBottom: "1px solid gray",
                                          padding: "15px 0px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {v.carVarientTypes}
                                      </Typography>
                                    </Box>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ))}
                            </Grid>
                          ) : (
                            <Grid>
                              {arrayOne.map((car, i) => (
                                <Grid item>
                                  <div>
                                    <Accordion
                                      // expanded={expanded === accordinArray[i]}
                                      expanded={expanded === accordinArray[i]}
                                      onChange={handleChange(accordinArray[i])}
                                    >
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        onClick={() =>
                                          inputOneBrand("one", car.carBrand)
                                        }
                                      >
                                        <Typography>{car.carBrand}</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        {arrayTwo.map((at, ta) => (
                                          <Grid key={ta}>
                                            {at.carArray.map((model, taa) => (
                                              <Grid
                                                key={taa}
                                                item
                                                onClick={() => {
                                                  inputOneBrand(
                                                    "two",
                                                    Object.keys(model)
                                                  );
                                                  setOne(
                                                    Object.values(model)[0]
                                                  );
                                                }}
                                                sx={{
                                                  cursor: "pointer",
                                                  textAlign: "center",
                                                  border: "1px solid gray",
                                                  padding: "10px 0px",
                                                  margin: "5px 0px",
                                                }}
                                              >
                                                {Object.keys(model)}
                                              </Grid>
                                            ))}
                                          </Grid>
                                        ))}
                                      </AccordionDetails>
                                    </Accordion>
                                  </div>
                                </Grid>
                              ))}
                            </Grid>
                          )}
                        </Grid>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Modal>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12}>
                {
                  <Grid>
                    <Typography
                      component={"img"}
                      src={compareDataOne.carImage}
                      width="75%"
                    ></Typography>
                    <Button
                      sx={{ float: "right" }}
                      onClick={() => {
                        handleDeleteDataOne({});
                      }}
                    >
                      X
                    </Button>
                    <Typography component={"p"}>
                      {compareDataOne.carVarientTypes}
                    </Typography>
                    <Typography component={"p"}>
                      Rs. {compareDataOne.priceStart} Lakh Avg. Ex-Showrooom
                      price
                    </Typography>
                  </Grid>
                }
              </Grid>
            )}
          </Grid>

          {/*------------comparison item-2 ---------------*/}

          <Grid
            xs={12}
            md={6}
            sx={{
              border: "1px solid #E1E1E1",
              borderCollapse: "collapse",
              padding: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {compareInputTwo.length !== 3 ? (
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "center",
                }}
              >
                <Link
                  component={"img"}
                  src={
                    " https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg"
                  }
                  width="10%"
                  onClick={handleOpen2}
                ></Link>
                <Grid item>
                  <Modal
                    open={open2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Grid sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Select Your Brand or Model
                      </Typography>

                      {/* search code 2 */}
                      <Box
                        item
                        sx={{
                          border: "1px solid black",
                          mt: 2,
                          padding: "10px 0px",
                        }}
                      >
                        <BsSearch style={{ padding: "0px 15px" }} />
                        {compareInputTwo.map((v, i) => {
                          return (
                            <span
                              style={{
                                border: "1px solid gray",
                                padding: "5px",
                                width: "10%",
                                fontSize: "14px",
                                borderRadius: "4px",
                                cursor: "pointer",
                              }}
                              key={{ i }}
                            >
                              {v}
                              <GiCancel
                                style={{ padding: "0px 0px 0px 5px" }}
                                onClick={() => deleteSpanTwo(i)}
                              />
                            </span>
                          );
                        })}

                        {compareInputTwo.length === 0 ? (
                          <input
                            type="text"
                            style={{
                              width: "80%",
                              border: "0px",
                              outine: "none",
                            }}
                            onInput={(e) => getInput(e)}
                          ></input>
                        ) : (
                          ""
                        )}

                        {compareInputTwo.length == 1 ? (
                          <input
                            type="text"
                            style={{
                              width: "80%",
                              border: "0px",
                              outine: "none",
                            }}
                          ></input>
                        ) : (
                          ""
                        )}
                      </Box>
                      {DeteltionTwo ? (
                        <Grid item xs={12}>
                          {compareInputTwo.length == 2 ? (
                            <Grid>
                              {two.map((v, i) => (
                                <>
                                  {compareInputTwo.length == 2 &&
                                  isDuplicate !== v.carVarientTypes ? (
                                    <Box key={{ i }}>
                                      <Typography
                                        onClick={() => {
                                          inputTwoBrand(
                                            "three",
                                            v.carVarientTypes
                                          );
                                          handleDataTwo(v);
                                          handleClose2(true);
                                        }}
                                        sx={{
                                          cursor: "pointer",
                                          borderBottom: "1px solid gray",
                                          padding: "15px 0px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {v.carVarientTypes}
                                      </Typography>
                                    </Box>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ))}
                            </Grid>
                          ) : (
                            <Grid>
                              {arrayOne.map((car, i) => (
                                <Grid item>
                                  <div>
                                    <Accordion
                                      expanded={
                                        expandedTwo === accordinArrayTwo[i]
                                      }
                                      onChange={handleChangeTwo(
                                        accordinArrayTwo[i]
                                      )}
                                    >
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        onClick={() =>
                                          inputTwoBrand("one", car.carBrand)
                                        }
                                      >
                                        <Typography>{car.carBrand}</Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        {car.carArray.map((model) => (
                                          <Grid
                                            item
                                            onClick={() => {
                                              inputTwoBrand(
                                                "two",
                                                Object.keys(model)
                                              );
                                              setTwo(Object.values(model)[0]);
                                            }}
                                            sx={{
                                              cursor: "pointer",
                                              textAlign: "center",
                                              border: "1px solid gray",
                                              padding: "10px 0px",
                                              margin: "5px 0px",
                                            }}
                                          >
                                            {Object.keys(model)}
                                          </Grid>
                                        ))}
                                      </AccordionDetails>
                                    </Accordion>
                                  </div>
                                </Grid>
                              ))}
                            </Grid>
                          )}
                        </Grid>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Modal>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Typography
                  component={"img"}
                  src={compareDataTwo.carImage}
                  width="75%"
                ></Typography>
                <Button
                  sx={{ float: "right" }}
                  onClick={() => {
                    handleDeleteDataTwo({});
                  }}
                >
                  X
                </Button>
                <Typography component={"p"}>
                  {compareDataTwo.carVarientTypes}
                </Typography>
                <Typography component={"p"}>
                  Rs. {compareDataTwo.priceStart} Lakh Avg. Ex-Showrooom price
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>

        {locations ? (
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", marginTop: "25px" }}
            onClick={() => {
              navigate("/comparePage");
            }}
          >
            Compare
          </Button>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default CompareCars;
