import react, { useState, useContext } from "react";
import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, alpha } from "@material-ui/core/styles";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottoom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#274156",
    color: "#fff",
    "&:hover": {
      background: alpha("#274156", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard({ setOpen, listId, type }) {
  const classes = useStyle();
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [content, setContent] = useState("");

  const handleOnChange = (e) => {
    setContent(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(content, listId);
      setContent("");
      setOpen(false);
    } else {
      addMoreList(content);
      setContent("");
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={content}
            placeholder={type === "card" ? "Enter task" : "Enter list title"}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Add task" : "Add list"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
