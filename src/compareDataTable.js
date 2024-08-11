import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Grid, Link, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useSelector } from "react-redux";
import EngineTransmisssion from "./compareDataTable/engineTransmisssion";
import DimensionWeight from "./compareDataTable/dimensionAndWeight";
import Safety from "./compareDataTable/safety";
import BreakingTraction from "./compareDataTable/breankingAndTraction";

export default function CompareDataTable() {
  const [open, setOpen] = React.useState(false);
  const { compareDataOne, compareDataTwo } = useSelector((store) => store.car);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <>
        {Object.entries(compareDataOne).length > 0 &&
        Object.entries(compareDataTwo).length > 0 ? (
          <>
            <Grid xs={12}>
              <Tabs
                // value={value}
                // onChange={handleChange}
                // aria-label="nav tabs example"
                // role="navigation"
                onChange={handleChange}
                value={value}
                aria-label="Tabs where selection follows focus"
                selectionFollowsFocus
              >
                <Tab label="Specification" href="#specification" />
                <Tab label="Features" href="#features" />
              </Tabs>
            </Grid>
            <TableContainer>
              <Table
                aria-label="collapsible table"
                sx={{ "& > *": { border: "1px solid #e1e1e1" } }}
              >
                <TableHead>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>PARTICULARS</TableCell>
                    <TableCell align="center">
                      {compareDataOne.carVarientTypes}
                    </TableCell>
                    <TableCell align="center">
                      {compareDataTwo.carVarientTypes}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell id="specification">Specification</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <EngineTransmisssion />
                <DimensionWeight />

                <TableHead>
                  <TableRow>
                    <TableCell id="features">Features</TableCell>
                    <TableCell></TableCell>

                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <Safety />
                <BreakingTraction />
              </Table>
            </TableContainer>
          </>
        ) : (
          <Grid></Grid>
        )}
      </>
    </Container>
  );
}
