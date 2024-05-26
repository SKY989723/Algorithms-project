import React from "react";
import { Paper, Typography, Button, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
// Define a custom styled Paper component with similar styling to Card1 and Card2
const StyledPaper = styled(Paper)({
    padding: 20,
    borderRadius: 16,
    transition: "background-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
        backgroundColor: "#e0e0e0", // Grey color
        transform: "scale(1.05)",
    },
});

const Card3 = () => {
    return (
        <StyledPaper elevation={8}>
            <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
                Newton Raphson
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <Box mx={2}>
                    <Button
                        component={Link}
                        to="/newton-method"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ borderRadius: 8, fontWeight: "bold" }}
                    >
                        Method
                    </Button>
                </Box>
                <Box mx={2}>
                    <Button
                        component={Link}
                        to="/newton-practical"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ borderRadius: 8, fontWeight: "bold" }}
                    >
                        <div>

                            Practical
                        </div>
                    </Button>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default Card3;
