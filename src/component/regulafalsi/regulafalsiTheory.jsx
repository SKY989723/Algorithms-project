import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

const RegulaFalsiMethod = () => {
    return (
        <Container sx={{ maxWidth: 800, padding: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Regula Falsi Method
            </Typography>
            <Typography variant="body1" paragraph>
                The Regula Falsi method, also known as the method of false position or false position method, is a numerical root-finding algorithm used to approximate the roots of a real-valued function. It is an iterative method that starts with two initial guesses, one known to be above the root and one known to be below the root, and then refines these guesses to converge to the actual root of the function.
            </Typography>
            <Typography variant="body1" paragraph>
                Here's a high-level description of the Regula Falsi method:
            </Typography>
            <ol>
                <li>
                    <Typography variant="body1">
                        <strong>Choose Initial Guesses:</strong> Choose two initial guesses, a and b, such that f(a) and f(b) have opposite signs (i.e., one is positive and the other is negative), indicating that there is a root between a and b.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Compute Next Approximation:</strong> Compute the next approximation, c, using the formula: c = (a * f(b) - b * f(a)) / (f(b) - f(a)).
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Calculate Function Value:</strong> Calculate the function value at c, i.e., f(c).
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Check Sign of f(c):</strong> If f(c) is close to zero (within a predefined tolerance), c is considered the root, and the algorithm terminates. If f(c) has the same sign as f(a), replace a with c. If f(c) has the same sign as f(b), replace b with c.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        <strong>Repeat:</strong> Repeat steps 2-4 until you reach a satisfactory approximation to the root, within the desired tolerance.
                    </Typography>
                </li>
            </ol>
            <Divider />
            <Typography variant="h5" fontWeight="bold">Input and Output:</Typography>
            <Typography variant="body1" paragraph>
                Enter the value of 'a': 2
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the value of 'b': 3
            </Typography>
            <Typography variant="body1" paragraph>
                Enter the non-linear equation as a JavaScript expression (e.g., x*x*x - 2*x - 5): x*x*x*x + x*x*x - 7*x*x - x + 5
            </Typography>
            <Typography variant="body1" paragraph>
                The value of the root is: 2.0499
            </Typography>
        </Container>
    );
};

export default RegulaFalsiMethod;
