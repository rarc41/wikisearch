import { Paper, Typography } from "@mui/material";
import React from "react";

const NoResults = () => {
    return (
        <Paper
        elevation={5}
        sx={{
          margin: "2rem",
          padding: "2rem",
          borderRadius: "2rem",
          background: "rgba(255,255,255, 0.3)",
        }}
      >
        <Typography variant="h3">
          No results found.
        </Typography>
      </Paper>
    );
};

export default NoResults;