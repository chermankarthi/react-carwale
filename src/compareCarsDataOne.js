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
  updatecompareInputOne,
  updateDataOne,
  deleteDataOne,
} from "./redux/slice";
import CompareCarsDataTwo from "./compareCarsDataTwo";
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

const CompareCarsDataOne = () => {
  //REDUX
  const {
    allBrands,
    mainArray,
    compareDataOne,
    compareInputOne,
    compareDataTwo,
  } = useSelector((store) => store.car);
  const dispatch = useDispatch();
  //MODAL
  const [open, setOpen] = React.useState(false);
  //ACCORDION
  const [expanded, setExpanded] = React.useState(false);
  const [selectedBrandOne, setSelectedBrandOne] = useState(false);
  const [selectedModelOne, setSelectedModelOne] = useState(false);
  const [modelVariantOne, setModelVariantOne] = useState([]);

  //MODAL FUNCTIONS
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
    setSelectedBrandOne(false);
    setSelectedModelOne(false);
  };
  //

  //ACCORDION FUNCTIONS
  //---for brand expand
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded || dataValue ? panel : false);
    setSelectedBrandOne(newExpanded || dataValue ? panel : false);
  };

  const handleSelectedBrandOne = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded || dataValue ? panel : false);
    setSelectedBrandOne(newExpanded || dataValue ? panel : false);
  };

  useEffect(() => {
    selectedBrandOne && setDataValue("");
  }, [selectedBrandOne]);
  const [brandSearch, setBrandSearch] = useState([]);
  useEffect(() => {
    var b = [];
    var a = allBrands.filter((v, i) => {
      return b.push(v.brandName.toLocaleLowerCase());
    });
    setBrandSearch([b]);
  }, []);

  //---for brand deletion
  const deleteSelectedBrandOne = () => {
    setExpanded(false);
    setSelectedBrandOne(false);
    setSelectedModelOne(false);
    setDuplicate([...allBrands]);
  };

  //--for model selection
  const handleSelectedModelOne = (item) => {
    setSelectedBrandOne(expanded);
    setSelectedModelOne(item.model);
  };
  //--for model deletion
  const deleteSelectedModelOne = (brand) => {
    setSelectedBrandOne(brand);
    setExpanded(brand);
    setSelectedModelOne(false);
  };

  //---for variant selection
  const [forModelVariant, setForModelVariant] = useState([]);
  useEffect(() => {
    setSelectedModelOne(selectedModelOne);
    mainArray.filter((v, i) => {
      return v.carArray.map((value, index) => {
        if (Object.keys(value)[0] == selectedModelOne) {
          setForModelVariant(Object.values(value)[0]);
        }
      });
    });
  }, [selectedModelOne]);

  useEffect(() => {
    var variant = forModelVariant.filter((value, index) => {
      return index > 0;
    });
    console.log(variant, "variant");
    setModelVariantOne(variant);
  }, [forModelVariant]);

  //COMPARE DATA ONE
  const handleDataOne = (data) => {
    dispatch(updateDataOne(data));
    dispatch(updatecompareInputOne(data.carVarientTypes));
    setOpen(false);
    setExpanded(false);
    setSelectedBrandOne(false);
    setSelectedModelOne(false);
  };

  //---for delete data one
  const handleDeleteDataOne = () => {
    dispatch(deleteDataOne({}));
    dispatch(updatecompareInputOne([]));
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
              handleModelSearch(value.model, data, value.id, v.brandName, i);
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

    console.log("handleBrand");
  };
  const handleModelSearch = (item, data, id, brand, index) => {
    var x = allBrands.map((v, i) => {
      if (v.brandName == brand) {
        return {
          ...v,
          models: v.models.filter((val, ind) => {
            return val.model == item;
          }),
        };
      } else {
        return v;
      }
    });
    var k = x.sort((a) => {
      return a.brandName > brand;
    });
    console.log(k, "k");

    console.log(x, "x");
    setExpanded(item.toLowerCase().includes(data) ? brand : expanded);
    setDuplicate(item.toLowerCase().includes(data) ? x : [...allBrands]);

    if (data.length == "") {
      setDuplicate([...allBrands]);
      setExpanded(false);
    }
  };

  const handleModelSearchTwo = (e) => {
    var data = e.target.value.toLowerCase();
    setDataModel(data);
    setDuplicate(
      allBrands.map((v, i) => {
        if (v.brandName == expanded) {
          return {
            ...v,
            models: v.models.filter((val, ind) => {
              return val.model.toLowerCase().includes(data);
            }),
          };
        } else {
          return v;
        }
      })
    );

    if (data.length == "") {
      setExpanded(selectedBrandOne);
      setDuplicate(
        allBrands.map((objParent) => ({
          ...objParent,
          models: objParent.models.filter(({ model }) => model),
        }))
      );
    }
  };
  console.log(modelVariantOne, "modelVariant");

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
          {/* ---------------------------------  COMPARE CAR TWO  START-------------------------------------------       */}
          {compareInputOne.length <= 0 && (
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
                        {selectedBrandOne && (
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
                                {selectedBrandOne}
                                <GiCancel
                                  style={{
                                    padding: "0px 0px 0px 5px",
                                  }}
                                  onClick={() => deleteSelectedBrandOne()}
                                />
                              </Typography>
                            </Grid>
                            {selectedModelOne && (
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
                                  {selectedModelOne}
                                  <GiCancel
                                    style={{ padding: "0px 0px 0px 5px" }}
                                    onClick={() =>
                                      deleteSelectedModelOne(selectedBrandOne)
                                    }
                                  />
                                </Typography>
                              </Grid>
                            )}
                          </>
                        )}
                        {!selectedModelOne &&
                          (!selectedBrandOne ? (
                            <Grid
                              xs={12}
                              item
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Input
                                width="100%"
                                onChange={(e) => handleSearch(e)}
                                placeholder={
                                  !selectedBrandOne
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
                  {!selectedModelOne ? (
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
                                    handleSelectedBrandOne(value.brandName)
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
                                        handleSelectedModelOne(model)
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
                        {modelVariantOne.map((mv, vIndex) => (
                          <Grid
                            item
                            sx={{
                              borderBottom: "1px solid gray",
                              padding: "10px 0px",
                            }}
                          >
                            {compareDataTwo.carVarientTypes !=
                              mv.carVarientTypes && (
                              <Typography key={vIndex}>
                                <Typography
                                  onClick={() => {
                                    handleDataOne(mv);
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
          {compareInputOne.length > 0 && (
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
                    handleDeleteDataOne();
                  }}
                >
                  X
                </Button>

                <Typography
                  component={"img"}
                  src={compareDataOne.carImage}
                  width="75%"
                ></Typography>

                <Typography component={"p"}>
                  {compareDataOne.carVarientTypes}
                </Typography>
                <Typography component={"p"}>
                  Rs. {compareDataOne.priceStart} Lakh
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

export default CompareCarsDataOne;
