import React, { useEffect, useState } from "react";

//ICONS
//--------MUI icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//--------React icons
import { GiCancel } from "react-icons/gi";
//

//MUI
import { Container, Grid, Input, Link } from "@mui/material";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//

//ACCORDION
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
//

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  updatecompareInputTwo,
  updateDataTwo,
  deleteDataTwo,
} from "./redux/slice";
//

//ACCORDION STYLE
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
//

//MODAL STYLE
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
//

const CompareCarsDataTwo = () => {
  //REDUX
  const {
    allBrands,
    mainArray,
    compareDataTwo,
    compareInputTwo,
    compareDataOne,
  } = useSelector((store) => store.car);
  const dispatch = useDispatch();
  //MODAL
  const [open, setOpen] = React.useState(false);
  //ACCORDION
  const [expanded, setExpanded] = React.useState(false);
  const [selectedBrandTwo, setSelectedBrandTwo] = useState(false);
  const [selectedModelTwo, setSelectedModelTwo] = useState(false);
  const [modelVariantTwo, setModelVariantTwo] = useState([]);

  //MODAL FUNCTIONS
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
    setSelectedBrandTwo(false);
    setSelectedModelTwo(false);
  };
  //

  //ACCORDION FUNCTIONS
  //---for brand expand
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded || dataValue ? panel : false);
    setSelectedBrandTwo(newExpanded || dataValue ? panel : false);
  };

  const handleSelectedBrandTwo = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded || dataValue ? panel : false);
    setSelectedBrandTwo(newExpanded || dataValue ? panel : false);
  };

  useEffect(() => {
    selectedBrandTwo && setDataValue("");
  }, [selectedBrandTwo]);
  const [brandSearch, setBrandSearch] = useState([]);
  useEffect(() => {
    var b = [];
    var a = allBrands.filter((v, i) => {
      return b.push(v.brandName.toLocaleLowerCase());
    });
    setBrandSearch([b]);
  }, []);

  //---for brand deletion
  const deleteSelectedBrandTwo = () => {
    setExpanded(false);
    setSelectedBrandTwo(false);
    setSelectedModelTwo(false);
    setDuplicate([...allBrands]);
  };

  //--for model selection
  const handleSelectedModelTwo = (item) => {
    setSelectedBrandTwo(expanded);
    setSelectedModelTwo(item.model);
  };
  //--for model deletion
  const deleteSelectedModelTwo = (brand) => {
    setSelectedBrandTwo(brand);
    setExpanded(brand);
    setSelectedModelTwo(false);
  };

  //---for variant selection
  useEffect(() => {
    setSelectedModelTwo(selectedModelTwo);
    mainArray.filter((v, i) => {
      return v.carArray.map((value, index) => {
        if (Object.keys(value)[0] == selectedModelTwo) {
          setModelVariantTwo(Object.values(value)[0]);
        }
      });
    });
  }, [selectedModelTwo]);

  //COMPARE DATA ONE
  const handleDataTwo = (data) => {
    dispatch(updateDataTwo(data));
    dispatch(updatecompareInputTwo(data.carVarientTypes));
    setOpen(false);
    setExpanded(false);
    setSelectedBrandTwo(false);
    setSelectedModelTwo(false);
  };

  //---for delete data one
  const handleDeleteDataTwo = () => {
    dispatch(deleteDataTwo({}));
    dispatch(updatecompareInputTwo([]));
  };
  const [dataValue, setDataValue] = useState("");
  const [dataModel, setDataModel] = useState("");
  //SERACH DATA
  const [a, setA] = useState([]);
  const [duplicate, setDuplicate] = useState([...allBrands]);

  const handleSearch = (e) => {
    var data = e.target.value.toLowerCase();
    setDataValue(data);

    var selectionSearch = allBrands.filter((v, i) => {
      return v.brandName.toLowerCase().includes(data)
        ? handleBrandSearch(v, data)
        : v.models.map((value, index) => {
            value.model.toLowerCase().includes(data) &&
              handleModelSearch(value.model, data, value.id, v.brandName);
          });
    });
  };

  const handleBrandSearch = (item, data) => {
    if (data.length > 0) {
      var k = duplicate.sort((a, b) => {
        if (
          a.brandName.toLowerCase().includes(data) <
          b.brandName.toLowerCase().includes(data)
        ) {
          return 1;
        } else if (
          a.brandName.toLowerCase().includes(data) >
          b.brandName.toLowerCase().includes(data)
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      setExpanded(k[0].brandName);
    }
    if (data.length == "") {
      setDuplicate([...allBrands]);
      setExpanded(false);
    }
  };
  const handleModelSearch = (item, data, id, brand) => {
    var s = duplicate.map((objParent) => ({
      ...objParent,
      models: objParent.models.filter(({ model }) => model.includes(item)),
    }));
    setExpanded(brand);
    setDuplicate(item.toLowerCase().includes(data) ? s : [...allBrands]);

    if (data.length == "") {
      setDuplicate([...allBrands]);
      setExpanded(false);
    }
  };

  const handleModelSearchTwo = (e) => {
    console.log("searching");
    var data = e.target.value.toLowerCase();
    setDataModel(data);

    var u = allBrands.map((v, i) => {
      return v.models.filter((value) => {
        return (
          value.model.toLowerCase().includes(data) &&
          setDuplicate(
            allBrands.map((objParent) => ({
              ...objParent,
              models: objParent.models.filter(({ model }) =>
                model.includes(value.model)
              ),
            }))
          )
        );
      });
    });

    if (data.length == "") {
      setExpanded(selectedBrandTwo);
      setDuplicate(
        allBrands.map((objParent) => ({
          ...objParent,
          models: objParent.models.filter(({ model }) => model),
        }))
      );
    }
  };

  return (
    <>
      <Container>
        <Grid
          Container
          sx={{
            maxHeight: "250px",
            minHeight: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* ---------------------------------  COMPARE CAR ONE  START-------------------------------------------       */}
          {compareInputTwo.length <= 0 && (
            <Grid
              item
              xs={12}
              sx={{
                padding: { xs: "25px", md: "50px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                component={"img"}
                src={
                  " https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg"
                }
                width="10%"
                onClick={handleOpen}
              ></Link>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Grid container sx={style} xs>
                  {/* -------------------------------search box start--------------------------- */}
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Grid item xs={12}>
                      <Grid
                        item
                        container
                        xs={12}
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        {selectedBrandTwo && (
                          <>
                            <Grid
                              xs={5}
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: {
                                    xs: "12px",
                                  },
                                  border: "1px solid gray",
                                  width: "90%",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                }}
                              >
                                {selectedBrandTwo}
                                <GiCancel
                                  style={{ padding: "0px 0px 0px 5px" }}
                                  onClick={() => deleteSelectedBrandTwo()}
                                />
                              </Typography>
                            </Grid>
                            {selectedModelTwo && (
                              <Grid item xs={6}>
                                <Typography
                                  sx={{
                                    fontSize: {
                                      xs: "12px",
                                    },
                                    border: "1px solid gray",
                                    width: "90%",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                  }}
                                >
                                  {selectedModelTwo}
                                  <GiCancel
                                    style={{ padding: "0px 0px 0px 5px" }}
                                    onClick={() =>
                                      deleteSelectedModelTwo(selectedBrandTwo)
                                    }
                                  />
                                </Typography>
                              </Grid>
                            )}
                          </>
                        )}
                        {!selectedModelTwo &&
                          (!selectedBrandTwo ? (
                            <Grid
                              xs={12}
                              item
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Input
                                width="100%"
                                onChange={(e) => handleSearch(e)}
                                placeholder={
                                  !selectedBrandTwo
                                    ? "Type your brand or model"
                                    : "Type your model"
                                }
                                value={dataValue}
                              ></Input>
                            </Grid>
                          ) : (
                            <Grid xs={7}>
                              <Input
                                width="100%"
                                placeholder="Type your Brand"
                                value={dataModel}
                                onChange={(e) => handleModelSearchTwo(e)}
                              ></Input>
                            </Grid>
                          ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* -------------------------------search box end--------------------------- */}
                  {/* --------------------------------accordion start------------------------- */}
                  {!selectedModelTwo ? (
                    <>
                      {duplicate.map((value, index) => (
                        <>
                          <Grid item xs={12}>
                            <>
                              <Accordion
                                expanded={expanded === value.brandName}
                                onChange={handleChange(value.brandName)}
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                  onClick={() =>
                                    handleSelectedBrandTwo(value.brandName)
                                  }
                                >
                                  <Typography key={index}>
                                    {value.brandName}
                                  </Typography>
                                </AccordionSummary>

                                <AccordionDetails
                                  sx={{
                                    cursor: "pointer",
                                    textAlign: "center",
                                    border: "1px solid gray",
                                    padding: "0px",
                                    // padding: "10px 0px",
                                    // margin: "5px 0px"
                                  }}
                                >
                                  {value.models.map((model, modelIndex) => (
                                    <Typography
                                      key={modelIndex}
                                      sx={{
                                        borderBottom: "1px solid gray",
                                        padding: "10px 0px",
                                      }}
                                      onClick={() =>
                                        handleSelectedModelTwo(model)
                                      }
                                    >
                                      {model.model}
                                    </Typography>
                                  ))}
                                </AccordionDetails>
                              </Accordion>
                            </>
                          </Grid>
                        </>
                      ))}
                    </>
                  ) : (
                    expanded && (
                      <Grid item xs={12} sx={{ marginTop: "10px" }}>
                        {modelVariantTwo.map((mv, mvIndex) => (
                          <Grid
                            item
                            sx={{
                              borderBottom: "1px solid gray",
                              padding: "10px 0px",
                            }}
                          >
                            {compareDataOne.carVarientTypes !=
                              mv.carVarientTypes && (
                              <Typography key={mvIndex}>
                                <Typography
                                  onClick={() => {
                                    handleDataTwo(mv);
                                    // handleModelvaraiant();
                                  }}
                                >
                                  {mv.carVarientTypes}
                                </Typography>
                              </Typography>
                            )}
                          </Grid>
                        ))}
                      </Grid>
                    )
                  )}
                  {/* --------------------------------accordion end---------------------------- */}
                </Grid>
              </Modal>
            </Grid>
          )}
          {compareInputTwo.length > 0 && (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid sx={{ maxHeight: "225px" }}>
                <Button
                  sx={{ float: "right" }}
                  onClick={() => {
                    handleDeleteDataTwo();
                  }}
                >
                  X
                </Button>

                <Typography
                  component={"img"}
                  src={compareDataTwo.carImage}
                  width="75%"
                ></Typography>

                <Typography component={"p"}>
                  {compareDataTwo.carVarientTypes}
                </Typography>
                <Typography component={"p"}>
                  Rs. {compareDataTwo.priceStart} Lakh
                </Typography>
                <Typography component={"p"}>Avg. Ex-Showrooom price</Typography>
              </Grid>
            </Grid>
          )}

          {/* ---------------------------------  COMPARE CAR ONE END -------------------------------------------       */}
        </Grid>
      </Container>
    </>
  );
};

export default CompareCarsDataTwo;
