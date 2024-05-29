import React, { useState } from "react";
import { Paper, Typography, Button, Box, TextField } from "@mui/material";
import { evaluate, derivative } from "mathjs";

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
      const func = (x) => evaluate(userFunc, { x });
      const funcDerivative = (x) => evaluate(derivative(userFunc, 'x').toString(), { x });
      let x0 = parseFloat(initialGuess);
      const tol = parseFloat(tolerance);

      let x1;
      for (let i = 0; i < 100; i++) {
        const fX0 = func(x0);
        const fPrimeX0 = funcDerivative(x0);

        x1 = x0 - fX0 / fPrimeX0;
        if (Math.abs(x1 - x0) < tol) {
          const roundedNumber = x1.toFixed(4);
          // setRoot(`The value of the root is: ${roundedNumber}`);
          setResult(`Root found at iteration ${i + 1}: ${roundedNumber}`);
          return x1;
        }
        x0 = x1;
      }

      console.warn("Newton-Raphson method did not converge within the specified iterations.");
      setResult("Newton-Raphson method did not converge within the specified iterations.");
      return NaN;
    } catch (error) {
      console.error("Error evaluating function or derivative:", error);
      setResult("Error evaluating function or derivative. Please check your input.");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Newton-Raphson Method
      </Typography>
      <TextField
        fullWidth
        label="Enter a syntax in terms of 'x'"
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
