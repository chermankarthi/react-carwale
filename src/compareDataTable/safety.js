import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "../App.css";
import "../compareDataTable/style.css";
import { useState } from "react";
import { useEffect } from "react";

const Safety = () => {
  const [open, setOpen] = React.useState(false);
  const { compareDataOne, compareDataTwo } = useSelector((store) => store.car);
  const [carOneData, setCarOneData] = useState({});
  const [carTwoData, setCarTwoData] = useState({});
  useEffect(() => {
    setCarOneData(compareDataOne.safety);
    setCarTwoData(compareDataTwo.safety);
  });
  console.log(carOneData, "carOne");
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Safety</TableCell>
          <TableCell></TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell style={{ padding: 0 }} colSpan={3}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell>Overspeed Warning</TableCell>
                    <TableCell align="center">
                      {carOneData.overSpeedWarning}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.overSpeedWarning}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Airbags</TableCell>
                    <TableCell align="center">{carOneData.irBags}</TableCell>
                    <TableCell align="center">{carTwoData.irBags}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Rear Middle Three Point seatbelt</TableCell>
                    <TableCell align="center">
                      {carOneData.earMiddleThreePointSeatbelt}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.earMiddleThreePointSeatbelt}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default Safety;
