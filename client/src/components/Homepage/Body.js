import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  body: {
    backgroundColor: "#F7FFF7",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#0E3E52",
  },
  whatWeDo: {
    display: "inline-flex",
    backgroundColor: "rgb(230, 231, 231)",
  },
  myImage: {
    marginLeft: "8%",
    width: "40%",
    padding: "2%",
  },
  text: {
    textAlign: "left",
    width: "35%",
    padding: "10% 5%",
    marginLeft: "8%",
  },
  learn: {
    cursor: "pointer",
    "&:hover": {
      color: "#dcebf7",
    },
  },
  imageCompany: {
    marginLeft: "55%",
    width: "40%",
    padding: "2%",
  },
  reviews: {
    display: "inline-flex",
    textAlign: "center",
    width: "40%",
    marginLeft: "35%",
  },
  reviewClass: {
    display: "inline-flex",
  },
  dropdown: {
    position: "relative",
    display: "inline-flex",
  },
  dropdownContent: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
    zIndex: "1",
  },
  dropdownImg: {
    width: "70%",
    height: "100%",
    borderRadius: "80%",
    padding: "40px",
    opacity: "85%",
    marginLeft: "15%",
  },
  desc: {
    padding: "15px",
    textAlign: "center",
  },
}));

export default function Body() {
  const classes = useStyle();

  return (
    <body className={classes.body}>
      <div className={classes.whatWeDo}>
        <img
          src={require("../../assets/kanban_board_image.jpg").default}
          alt="Kanban board"
          className={classes.myImage}
        />
        <div className={classes.text}>
          <h1>A new way of organizing your business</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ducimus
            aliquid nemo tenetur minima architecto aspernatur rerum officiis hic
            necessitatibus. Repudiandae sapiente omnis amet quisquam praesentium
            veritatis assumenda explicabo voluptatem!
          </p>
          <br />
          <h4 className={classes.learn} learn>
            Learn more about our Application
          </h4>
        </div>
      </div>
      <div className={classes.company}>
        <img
          className={classes.imageCompany}
          src={require("../../assets/company_image.png").default}
          alt="Kanban Company"
        />
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil
            accusantium temporibus corporis nulla accusamus praesentium alias ea
            earum, quis unde, repudiandae quidem quam est aperiam cupiditate
            quas voluptate perferendis?
          </p>
        </div>
      </div>
      <h1 className={classes.reviews}>They Like Us</h1>
      <br />
      <div className={classes.reviewClass}>
        <div className={classes.dropdown}>
          <img
            src={require("../../assets/Picturereview1.png").default}
            className={classes.dropdownImg}
            alt="review 1"
          />
        </div>
        <div className={classes.dropdownContent}>
          <img src={require("../../assets/Picturereview1.png").default} alt="review 1" />
          <div className={classes.desc}>Amazing Review</div>
        </div>
      </div>
      <div className={classes.reviewClass}>
        <div className={classes.dropdown}>
          <img
            src={require("../../assets/Picturereview1.png").default}
            className={classes.dropdownImg}
            alt="review 1"
          />
        </div>
        <div className={classes.dropdownContent}>
          <img src={require("../../assets/Picturereview1.png").default} alt="review 1" />
          <div className={classes.desc}>Amazing Review</div>
        </div>
      </div>
      <div className={classes.reviewClass}>
        <div className={classes.dropdown}>
          <img
            src={require("../../assets/Picturereview1.png").default}
            className={classes.dropdownImg}
            alt="review 1"
          />
        </div>
        <div className={classes.dropdownContent}>
          <img src={require("../../assets/Picturereview1.png").default} alt="review 1" />
          <div className={classes.desc}>Amazing Review</div>
        </div>
      </div>
    </body>
  );
}
