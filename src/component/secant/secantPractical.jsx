// import React, { useState } from "react";
// import { Paper, Typography, Button, Box, TextField } from "@mui/material";

// const BisectionPractical = () => {
//   const [result, setResult] = useState(null);
//   const [userFunc, setUserFunc] = useState("");
//   const [lowerBound, setLowerBound] = useState("");
//   const [upperBound, setUpperBound] = useState("");
//   const [tolerance, setTolerance] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "userFunc") setUserFunc(value);
//     if (name === "lowerBound") setLowerBound(value);
//     if (name === "upperBound") setUpperBound(value);
//     if (name === "tolerance") setTolerance(value);
//   };

//   const bisectionMethod = () => {
//     const func = new Function("x", `return ${userFunc};`);
//     let a = parseFloat(lowerBound);
//     let b = parseFloat(upperBound);
//     const tol = parseFloat(tolerance);

//     if (func(a) * func(b) >= 0) {
//       console.error("The function values at endpoints must have opposite signs.");
//       setResult("The function values at endpoints must have opposite signs.");
//       return;
//     }

//     let iteration = 1;
//     let c;
//     do {
//       c = (a + b) / 2;
//       if (func(c) === 0 || Math.abs(b - a) / 2 < tol) {
//         console.log(`Root found at iteration ${iteration}: ${c}`);
//         setResult(`Root found at iteration ${iteration}: ${c}`);
//         return c;
//       }
//       if (func(c) * func(a) < 0) {
//         b = c;
//       } else {
//         a = c;
//       }
//       iteration++;
//     } while (iteration <= 100);

//     console.error("Maximum number of iterations reached. No root found within the specified tolerance.");
//     setResult("Maximum number of iterations reached. No root found within the specified tolerance.");
//     return null;
//   };

//   const secantMethod = () => {
//     const func = new Function("x", `return ${userFunc};`);
//     let x0 = parseFloat(lowerBound);
//     let x1 = parseFloat(upperBound);
//     const tol = parseFloat(tolerance);
//     let x2;
//     for (let i = 0; i < 100; i++) {
//       x2 = x1 - (func(x1) * (x1 - x0)) / (func(x1) - func(x0));
//       if (Math.abs(x2 - x1) < tol) {
//         setResult(`Root found at iteration ${i + 1}: ${x2}`);
//         return x2;
//       }
//       x0 = x1;
//       x1 = x2;
//     }
//     console.warn("Secant method did not converge within the specified iterations.");
//     setResult("Secant method did not converge within the specified iterations.");
//     return NaN;
//   };

//   return (
//     <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
//       <Typography variant="h6" textAlign="center" gutterBottom>
//         Bisection and Secant Methods
//       </Typography>
//       <TextField
//         fullWidth
//         label="Enter a function in terms of 'x'"
//         name="userFunc"
//         value={userFunc}
//         onChange={handleChange}
//         margin="normal"
//       />
//       <TextField
//         fullWidth
//         label="Enter the lower bound of the interval (a)"
//         name="lowerBound"
//         value={lowerBound}
//         onChange={handleChange}
//         margin="normal"
//       />
//       <TextField
//         fullWidth
//         label="Enter the upper bound of the interval (b)"
//         name="upperBound"
//         value={upperBound}
//         onChange={handleChange}
//         margin="normal"
//       />
//       <TextField
//         fullWidth
//         label="Enter the tolerance value"
//         name="tolerance"
//         value={tolerance}
//         onChange={handleChange}
//         margin="normal"
//       />
//       <Box textAlign="center" marginTop="20px">
//         <Button variant="contained" onClick={bisectionMethod} style={{ marginRight: "10px" }}>
//           Run Bisection Method
//         </Button>
//         <Button variant="contained" onClick={secantMethod}>
//           Run Secant Method
//         </Button>
//       </Box>
//       {result && (
//         <Typography variant="body1" style={{ marginTop: "20px" }}>
//           {result}
//         </Typography>
//       )}
//     </Paper>
//   );
// };

// export default BisectionPractical;
import React, { useState } from "react";
import { Paper, Typography, Button, Box, TextField } from "@mui/material";

const SecantPractical = () => {
  const [result, setResult] = useState(null);
  const [userFunc, setUserFunc] = useState("");
  const [initialGuess1, setInitialGuess1] = useState("");
  const [initialGuess2, setInitialGuess2] = useState("");
  const [tolerance, setTolerance] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userFunc") setUserFunc(value);
    if (name === "initialGuess1") setInitialGuess1(value);
    if (name === "initialGuess2") setInitialGuess2(value);
    if (name === "tolerance") setTolerance(value);
  };

  const secantMethod = () => {
    const func = new Function("x", `return ${userFunc};`);
    let x0 = parseFloat(initialGuess1);
    let x1 = parseFloat(initialGuess2);
    const tol = parseFloat(tolerance);
    let x2;

    for (let i = 0; i < 100; i++) {
      x2 = x1 - (func(x1) * (x1 - x0)) / (func(x1) - func(x0));
      if (Math.abs(x2 - x1) < tol) {
        const roundedNumber = x2.toFixed(4);
        // setRoot(`The value of the root is: ${roundedNumber}`);
        setResult(`Root found at iteration ${i + 1}: ${roundedNumber}`);
        return x2;
      }
      x0 = x1;
      x1 = x2;
    }

    console.warn("Secant method did not converge within the specified iterations.");
    setResult("Secant method did not converge within the specified iterations.");
    return NaN;
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Secant Method
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
        label="Enter the lower bound of the interval (x₀)"
        name="initialGuess1"
        value={initialGuess1}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Enter the upper bound of the interval (x₁)"
        name="initialGuess2"
        value={initialGuess2}
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
        <Button variant="contained" onClick={secantMethod}>
          Run Secant Method
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

export default SecantPractical;
