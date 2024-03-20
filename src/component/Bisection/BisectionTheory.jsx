import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

const BisectionMethod = () => {
    return (
        <Container sx={{ maxWidth: 800, padding: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Bisection Method
            </Typography>
            <Typography variant="body1" paragraph>
                The bisection method is a numerical technique used to find the root of a real-valued function. It works on the principle of repeatedly dividing an interval in half and then selecting the subinterval where the root lies.
            </Typography>
            <Typography variant="body1" paragraph>
                Select an interval [a, b] where the function f(x) changes sign. This means f(a)⋅f(b) less than 0, indicating that the root lies between a and b.
            </Typography>
            <Typography variant="h5">Procedure:</Typography>
            <ol>
                <li>
                    <Typography variant="body1">
                        <strong>Choose Initial Interval:</strong> Calculate the midpoint c of the interval: c=(a+b)/2.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Compute Midpoint:</strong> Evaluate f(c).
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Evaluate Function:</strong> If f(c) = 0 or |b - a| is smaller than a predefined tolerance, you can stop since you have found a root or reached an acceptable approximation.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Check Convergence:</strong>
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">
                                If f(c) has the same sign as f(a), update the interval to [c, b].
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                If f(c) has the same sign as f(b), update the interval to [a, c].
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Update Interval:</strong> Go back to step 2 and repeat the process until convergence is reached.
                    </Typography>
                </li>
            </ol>
            <Divider/>
            <Typography variant="h5" fontWeight="bold">Input and Output:</Typography>
            <Typography variant="body1" paragraph>
                Enter a function in terms of 'x', e.g., x^3 - x^2 - 2: x**3 - 4*x - 9
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the lower bound of the interval (a): 2
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the upper bound of the interval (b): 3
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the tolerance value: .001
            </Typography>
            <Typography variant="body1" paragraph>
                Root found at iteration 10: 2.7060546875
            </Typography>
        </Container>
    );
};

export default BisectionMethod;