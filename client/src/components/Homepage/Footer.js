import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(() => ({
  footer: {
    background: "#274156",
    width: "100%",
    padding: "1% 6%",
    margin: "0"
  },
  h2: {
    display: "inline",
    color: "#f7f9f9",
    fontSize: "16px",
    margin: "0"
  },
  div: {
    float: "right",
    lineHeight: "1.1",
    textAlign: "right",
    fontSize: "12px",
    color: "#F7f9f9"
  },
  a: {
    color: "#f7f9f9",
    textDecoration: 'none',
    '&:hover': {
      color: '#f7f9f9'
    }
  }
}))

export default function Footer() {
  const classes = useStyle()

  return (
    <footer className={classes.footer}>
      <h2 className={classes.h2}>Sebastian's Kanban Board Company</h2>
      <div className={classes.div}>
        <a className={classes.a} >
          Privacy Policy
        </a>
        <br />
        &copy; 2021 Sebastian's Kanban Board, Inc.
      </div>
    </footer>
  )
}
