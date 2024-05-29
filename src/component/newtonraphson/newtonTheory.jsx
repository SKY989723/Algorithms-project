import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

const NewtonRaphsonMethod = () => {
    return (
        <Container sx={{ maxWidth: 800, padding: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Newton-Raphson Method
            </Typography>
            <Typography variant="body1" paragraph>
                The Newton-Raphson method is an iterative numerical technique used for finding approximate roots of a real-valued function. The method is based on linear approximation and uses the derivative of the function to converge rapidly towards a root.
            </Typography>
            <Typography variant="h5">Procedure:</Typography>
            <ol>
                <li>
                    <Typography variant="body1">
                        <strong>Choose Initial Guess:</strong> Start with an initial guess X<sub>0</sub> close to the root.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Calculate Function Value and Derivative:</strong> Evaluate the function value f(X<sub>0</sub>) and its derivative f′(X<sub>0</sub>) at the initial guess.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Update Guess:</strong> Update the guess using the formula: X<sub>n+1</sub> = X<sub>n</sub> − f(X<sub>n</sub>) / f′(X<sub>n</sub>).
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Check Convergence:</strong> If |X<sub>n+1</sub> − X<sub>n</sub>| is smaller than a predefined tolerance, or if f(X<sub>n+1</sub>) is close to zero, stop since you have found a root or reached an acceptable approximation.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Repeat:</strong> Go back to step 2 and repeat the process with the updated guess.
                    </Typography>
                </li>
            </ol>
            <Divider />
            <Typography variant="h5" fontWeight="bold">Input and Output:</Typography>
            <Typography variant="body1" paragraph>
            Enter a syntax in terms of 'x': x*x*x - 6*x + 1
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the initial guess value: 1
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the tolerance value: .01
            </Typography>
            <Typography variant="body1" paragraph>
                Root found at iteration 4:0.1674
            </Typography>
        </Container>
    );
};

export default NewtonRaphsonMethod;
