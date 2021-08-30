import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  header: {
    padding: "20px 35px",
    backgroundColor: "#274156",
  },
  h1: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#0E0E52",
    margin: "0",
    display: "inline",
  },
  a: {
    color: "#F7F9F9",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  nav: {
    float: "right",
    margin: "7px 0",
  },
  li: {
    display: "inline",
  },
  listItemA: {
    margin: "0 30px",
    fontWeight: "lighter",
    fontSize: "22px",
  },
  loginButton: {
    border: "none",
    borderRadius: "15%",
    padding: "5px 42px",
    opacity: "90%",
    fontSize: "23px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#dcebf7",
      color: "#274156",
    },
  },
}));

export default function Navbar() {
  const classes = useStyle();

  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>
        <a href="/" className={classes.a}>
          Sebastian's Kanban Board
        </a>
      </h1>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.li}>
            <a href="/register">
              <button type="button" className={classes.loginButton}>
                Login/Register
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
