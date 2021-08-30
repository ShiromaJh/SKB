import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import { Collapse, Paper, Typography } from "@material-ui/core";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    color: "#fff",
    background: "#274156",
    "&:hover": {
      backgroundColor: alpha("#274156", 0.8),
    },
  },
}));

export default function InputContainer({ listId, type }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add Task" : "+ Add List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
