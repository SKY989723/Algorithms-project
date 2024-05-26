import React, { useState } from "react";
import { Paper, Typography, Button, Box, TextField } from "@mui/material";
const math = require("mathjs");

const NewtonRaphsonMethod = () => {
  const [result, setResult] = useState(null);
  const [userFunc, setUserFunc] = useState("");
  const [initialGuess, setInitialGuess] = useState("");
  const [tolerance, setTolerance] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userFunc") setUserFunc(value);
    if (name === "initialGuess") setInitialGuess(value);
    if (name === "tolerance") setTolerance(value);
  };

  const newtonRaphsonMethod = () => {
    try {
      const func = math.parse(userFunc).compile();
      const derivativeFunc = math.derivative(userFunc, "x").compile();

      let x0 = parseFloat(initialGuess);
      const tol = parseFloat(tolerance);

      if (isNaN(x0) || isNaN(tol)) {
        setResult("Initial guess and tolerance must be valid numbers.");
        return;
      }

      let x1;
      for (let i = 0; i < 100; i++) {
        const fX0 = func.evaluate({ x: x0 });
        const fPrimeX0 = derivativeFunc.evaluate({ x: x0 });

        if (fPrimeX0 === 0) {
          setResult("Derivative is zero. No solution found.");
          return;
        }

        x1 = x0 - fX0 / fPrimeX0;

        if (Math.abs(x1 - x0) < tol) {
          setResult(`Root found at iteration ${i + 1}: ${x1}`);
          return;
        }

        x0 = x1;
      }

      setResult("Newton-Raphson method did not converge within the specified iterations.");
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Newton-Raphson Method
      </Typography>
      <TextField
        fullWidth
        label="Enter a function in terms of 'x'"
        name="userFunc"
        value={userFunc}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Enter the initial guess value"
        name="initialGuess"
        value={initialGuess}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Enter the tolerance value"
        name="tolerance"
        value={tolerance}
        onChange={handleChange}
        margin="normal"
      />
      <Box textAlign="center" marginTop="20px">
        <Button variant="contained" onClick={newtonRaphsonMethod}>
          Run Newton-Raphson Method
        </Button>
      </Box>
      {result && (
        <Typography variant="body1" style={{ marginTop: "20px" }}>
          {result}
        </Typography>
      )}
    </Paper>
  );
};

export default NewtonRaphsonMethod;
