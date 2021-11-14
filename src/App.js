import React, { useState, useEffect } from "react";
import Searcher from "./components/Searcher";
import StartPage from "./components/StartPage";
import NoResults from "./components/NoResults";
import {
  Container,
  Grid,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import ListResults from "./components/ListResults";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultsNoFound, setResultsNoFound] = useState(false);

  // effect loading data
  useEffect(() => {
    setLoading(true);
    if (data === null) {
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ height: "100%", width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item container xs={12} sx={{ height: "25%" }} spacing={2}>
            <Paper
              elevation={15}
              sx={{
                margin: "2rem",
                padding: "2rem",
                borderRadius: "2rem",
                background: "rgba(255,255,255, 0.3)",
              }}
            >
              <Searcher
                setData={setData}
                setResultsNoFound={setResultsNoFound}
              ></Searcher>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            {data !== null && data.length !== 0 && (
              <Grid
                item
                container
                sx={{
                  flexGrow: 1,
                  overflow: "auto",
                  maxHeight: "30rem",
                  marginTop: "1rem",
                  padding: "0 10rem",
                }}
                direction="column"
              >
                <ListResults data={data}></ListResults>
              </Grid>
            )}
            {data !== null && data.length === 0 && (
              <>
                <Typography variant="h6">
                  No results found yet, please wait or try again later.
                </Typography>
                <CircularProgress></CircularProgress>
              </>
            )}
            {loading === true && <CircularProgress></CircularProgress>}
            {loading === false && data === null && (
              <Grid item container justifyContent="center">
                <StartPage></StartPage>
              </Grid>
            )}
            {resultsNoFound === true && (
              <Grid item container justifyContent="center">
                <NoResults></NoResults>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
