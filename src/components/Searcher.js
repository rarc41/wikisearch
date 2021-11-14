import React, { useState } from "react";
import {
  IconButton,
  TextField,
  outlinedInputClasses,
  inputClasses,
  inputLabelClasses,
  Grid,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(`
  .${outlinedInputClasses.root} {
      border-radius:30px;
    font-size: 1.5rem;
    color: #fff;
    &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}{
    border-color: #7209B7;
  }
  }
  .${outlinedInputClasses.notchedOutline} {
    border-color: #fff;
  }

  .${inputClasses.root} {
    font-size: 1.5rem;
  }

  .${inputLabelClasses.root} {
    font-size: 1.5rem;
    background:none;
    color: #fff;
    &.${inputLabelClasses.focused} {
        color: #fff;
    }
  }

`);

const Searcher = ({ setData, setResultsNoFound }) => {
  const [search, setSearch] = useState("");
  const url = "https://en.wikipedia.org/w/api.php";
  const params = {
    origin: "*",
    format: "json",
    action: "query",
    prop: "extracts|categories|links|info|links|description",
    exchars: 350,
    exintro: true,
    explaintext: true,
    generator: "search",
    gsrlimit: 50,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData([]);

    if (search.trim() === "") {
      setData(null);
      return;
    }

    params.gsrsearch = search;

    try {
      const response = await axios.get(url, { params });
      if (response.batchcomplete) {
        setResultsNoFound(true);
        return

      } else {
        setData(response.data.query.pages);
        return

      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", color: "white" }}
        align="center"
      >
        Welcome to the Awesome
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#7209B7" }}
        align="center"
      >
        Wikipedia Search Engine
      </Typography>
      <Grid
        item
        container
        component="form"
        sx={{ marginTop: "2rem", padding: "0 3rem", width: "75%" }}
        justifyContent="space-between"
        onSubmit={handleSubmit}
      >
        <CustomTextField
          type=""
          label="Keyword"
          value={search}
          onChange={handleChange}
          fullWidth
          name="search"
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                type="submit"
                //   onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ color: "#fff", fontSize: 40 }}
              >
                <SearchIcon 
                sx={{ color: "#fff", fontSize: 40 }}
                
                />
              </IconButton>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Searcher;
