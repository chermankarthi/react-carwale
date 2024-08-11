import * as React from "react";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { Grid, ListItem } from "@mui/material";
const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const Listbox = styled("ul")(({ theme }) => ({
  // margin: 0,
  // padding: 0,
  // padding: "auto",
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "hidden",
  maxHeight: { md: "300px" },

  border: "1px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function UseAutocomplete() {
  const navigate = useNavigate();
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData,
    getOptionLabel: (option) => option.title,
  });

  return (
    <>
      <Grid item {...getRootProps()}>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            sx={{
              width: { xs: "125px", sm: "100px", md: "200px", lg: "250px" },
              paddingBlock: "0px",
              paddingInline: "0px",
              padding: { xs: "5px 0px", sm: "7px 0px", md: "10px 0px" },
              border: "1px solid rgba(0, 0, 0, .25)",
              outlineStyle: "none",
              // padding: { xs: "1px 4px", sm: "3px 10px", lg: "5px 30px" },
              position: "relative",
            }}
            {...getInputProps()}
            placeholder="Search"
          ></Input>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {groupedOptions.length > 0 ? (
            <Listbox
              {...getListboxProps()}
              sx={{
                margin: "0",
                padding: "0",
                width: { xs: "125px", sm: "100px", md: "200px", lg: "250px" },
              }}
            >
              {groupedOptions.map((option, index) => (
                <ListItem
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "15px",
                      xl: "20px",
                    },
                    borderBottom: "1px solid rgba(0,0,0,.25)",
                  }}
                  {...getOptionProps({ option, index })}
                  onClick={(e) => navigate(`/carDetails/${option.title}`)}
                >
                  {option.title}
                </ListItem>
              ))}
            </Listbox>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}

const searchData = [
  { title: "Maruti Fronx" },
  { title: "Tata Nexon" },
  { title: "Hyundai Exter" },
  { title: "Toyota Rumion" },
  { title: "Mahindra Thar" },
  { title: "BMW X1" },
];
