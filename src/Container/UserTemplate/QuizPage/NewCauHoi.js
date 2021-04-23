import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import CauHoi from "./CauHoi";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function NewCauHoi() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const renderHTML = () => {
    let i = 1;
    let temp = [];
    while (i <= count) {
      temp.push(1);
      i++;
    }
    return temp.map((item) => {
      return <CauHoi />;
    });
  };
  return (
    <>
      <CauHoi />
      {renderHTML()}
      <div className="col-12 col-md-4 col-xl-2"></div>
      <div className="col-12 col-lg-6 col-xl-10">
        <div className={classes.root}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              renderHTML();
              setCount(count + 1);
            }}
          >
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </div>
      </div>
    </>
  );
}
