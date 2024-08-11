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

const EngineTransmisssion = () => {
  const [open, setOpen] = React.useState(false);
  const { compareDataOne, compareDataTwo } = useSelector((store) => store.car);
  const [carOneData, setCarOneData] = useState({});
  const [carTwoData, setCarTwoData] = useState({});
  useEffect(() => {
    setCarOneData(compareDataOne.engineAndTransmission);
    setCarTwoData(compareDataTwo.engineAndTransmission);
  });
  console.log(carOneData, "carOne");
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Engine & Transmission</TableCell>
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
                    {/* <TableCell xs={12}>Accelaration</TableCell>
                    <TableCell align="center" xs={6}>
                      {carOneData.accelaration}
                    </TableCell>
                    <TableCell align="center" xs={6}>
                      {carTwoData.accelaration} */}
                    {/* </TableCell> */}
                  </TableRow>

                  <TableRow>
                    {/* <TableCell xs={12}>Engine</TableCell>
                    <TableCell align="center" xs={6}>
                      {carOneData.engine}
                    </TableCell>
                    <TableCell align="center" xs={6}>
                      {carTwoData.engine}
                    </TableCell> */}
                  </TableRow>

                  <TableRow>
                    <TableCell>Engine Type</TableCell>
                    <TableCell align="center">
                      {carOneData.engineType}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.engineType}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Fuel Type</TableCell>
                    <TableCell align="center">{carOneData.fuelType}</TableCell>
                    <TableCell align="center">{carTwoData.fuelType}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Max Power (bhp@rpm)</TableCell>
                    <TableCell align="center">{carOneData.maxPower}</TableCell>
                    <TableCell align="center">{carTwoData.maxPower}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Max Torque (Nm@rpm)</TableCell>
                    <TableCell align="center">{carOneData.maxTorque}</TableCell>
                    <TableCell align="center">{carTwoData.maxTorque}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Mileage (ARAI) (kmpl)</TableCell>
                    <TableCell align="center">
                      {carOneData.mileageDetails}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.mileageDetails}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Driving Range (Km)</TableCell>
                    <TableCell align="center">
                      {carOneData.drivingRange}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.drivingRange}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>DriveTrain</TableCell>
                    <TableCell align="center">
                      {carOneData.driveTrain}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.driveTrain}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Transmission</TableCell>
                    <TableCell align="center">
                      {carOneData.transmission}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.transmission}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Emission Standard</TableCell>
                    <TableCell align="center">
                      {carOneData.emissionStandard}
                    </TableCell>
                    <TableCell align="center">
                      {carTwoData.emissionStandard}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Others</TableCell>
                    <TableCell align="center">{carOneData.others}</TableCell>
                    <TableCell align="center">{carTwoData.others}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Electric Motor</TableCell>
                    <TableCell align="center">
                      {compareDataOne.electricMotor}
                    </TableCell>
                    <TableCell align="center">
                      {compareDataTwo.electricMotor}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Others</TableCell>
                    <TableCell align="center">
                      {compareDataOne.others}
                    </TableCell>
                    <TableCell align="center">
                      {compareDataTwo.others}
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

export default EngineTransmisssion;
