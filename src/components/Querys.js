import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Chip,
} from "@mui/material";
import React from "react";

const Querys = ({ title, extract, categories, description, pageId}) => {

    const handleClick = () => {
        return
    }
  return (
    <Card
      sx={{
        padding: "2rem",
        borderRadius: "2rem",
        background: "rgba(255,255,255, 0.7)",
      }}
      elevation={3}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#4ea8de" }} aria-label="wiki">
            {title[0]}
          </Avatar>
        }
        title={title}
        subheader={description}
      ></CardHeader>
      <CardContent>
        <Typography variant="h7" color="textSecondary" component="p">
          Page ID: <Typography variant="h7" color="textSecondary" component="span" sx={{fontWeight: "bold"}}> {pageId}</Typography>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {extract? extract : "Sorry, There is not abstract available"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="textSecondary" component="p">
            Categories
        </Typography>
        {categories && (
          <Stack direction="row" spacing={1} sx={{flexWrap:'wrap'}}>
            {categories.map((category) => (
              <Chip label={category.title.split(':')[1]} onClick={()=>handleClick} key={categories.indexOf(category)}></Chip>
            ))}
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

export default Querys;
