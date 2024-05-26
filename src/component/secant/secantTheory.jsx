import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

const SecantMethod = () => {
    return (
        <Container sx={{ maxWidth: 800, padding: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Secant Method
            </Typography>
            <Typography variant="body1" paragraph>
                The secant method is a numerical technique used to find the root of a real-valued function. It essentially uses the slope of the secant line between two points on the function to estimate the root. The method iteratively refines this estimate until the desired tolerance is achieved or the maximum number of iterations is reached.
            </Typography>
            <Typography variant="h5">Procedure:</Typography>
            <ol>
                <li>
                    <Typography variant="body1">
                        <strong>Start with Initial Guesses:</strong> Choose initial guesses x<sub>0</sub> and x<sub>1</sub> which define the interval [x<sub>0</sub>, x<sub>1</sub>].
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Set Tolerance and Maximum Iterations:</strong> Define the tolerance ε and the maximum iteration count if desired.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Calculate Next Approximation:</strong> For each iteration, calculate the next approximation x<sub>2</sub> using the formula: x<sub>2</sub> = x<sub>1</sub> - f(x<sub>1</sub>) ⋅ (x<sub>1</sub> - x<sub>0</sub>) / (f(x<sub>1</sub>) - f(x<sub>0</sub>)).
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Convergence Check:</strong>
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">
                                Check if |x<sub>2</sub> - x<sub>1</sub>| is less than the tolerance (|x<sub>2</sub> - x<sub>1</sub>| &lt; ε). If true, return x<sub>2</sub> as the root.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Update Points:</strong> Update x<sub>0</sub> and x<sub>1</sub> for the next iteration: x<sub>0</sub> = x<sub>1</sub>, x<sub>1</sub> = x<sub>2</sub>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Iteration Limit:</strong> Repeat steps 2-5 until convergence is reached or until the maximum iteration count is reached. If the method does not converge within the specified iterations, consider the process unsuccessful.
                    </Typography>
                </li>
            </ol>
            <Divider />
            <Typography variant="h5" fontWeight="bold">Input and Output:</Typography>
            <Typography variant="body1" paragraph>
                Enter the function f(x) as a JavaScript expression (e.g., x*x - 2): x**3 - 5*x + 1
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the lower bound of the interval (a): 0
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the upper bound of the interval (b): 1
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the tolerance value: .001
            </Typography>
            <Typography variant="body1" paragraph>
                Root found at iteration 4: 0.2016
            </Typography>
        </Container>
    );
};

export default SecantMethod;
