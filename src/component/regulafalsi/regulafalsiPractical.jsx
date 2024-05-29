import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Box } from "@mui/material";

const RegulaFalsi = () => {
  const [root, setRoot] = useState(null);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [equationString, setEquationString] = useState("");

  const MAX_ITER = 4; // Define MAX_ITER here

  const regulaFalsi = () => {
    const func = (x) => eval(equationString);

    if (func(a) * func(b) >= 0) {
      setRoot("You have not assumed the right 'a' and 'b' values.");
      return;
    }

    let aVal = parseFloat(a); // Convert to number
    let bVal = parseFloat(b); // Convert to number

    let c = aVal;
    for (let i = 0; i < MAX_ITER; i++) {
      c = Math.abs((aVal * func(bVal) - bVal * func(aVal)) / (func(bVal) - func(aVal)));
      if (func(c) === 0) {
        break;
      } else if (func(c) * func(aVal) < 0) {
        bVal = c;
      } else {
        aVal = c;
      }
    }

    const roundedNumber = c.toFixed(4);
    setRoot(`The value of the root is: ${roundedNumber}`);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Regula Falsi Method
      </Typography>
      <TextField
        fullWidth
        label="Enter the value of 'a'"
        value={a}
        onChange={(e) => setA(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Enter the value of 'b'"
        value={b}
        onChange={(e) => setB(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Enter a syntax in terms of 'x'"
        value={equationString}
        onChange={(e) => setEquationString(e.target.value)}
        margin="normal"
      />
      <Box textAlign="center" marginTop="20px">
        <Button variant="contained" onClick={regulaFalsi}>
          Run Regula Falsi Method
        </Button>
      </Box>
      {root && (
        <Typography variant="body1" style={{ marginTop: "20px" }}>
          {root}
        </Typography>
      )}
    </Paper>
  );
};

export default RegulaFalsi;
