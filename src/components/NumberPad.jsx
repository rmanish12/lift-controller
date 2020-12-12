import React from "react";
import "../index.css";

import { Grid, Paper, Button } from "@material-ui/core";

const numberPad = () => {
  // adding all the floors in an array
  const floors = [7, 6, 5, 4, 3, 2, 1, 0];

  // function to get the className for each button
  const getClassName = (floor, index) => {
    let className;

    // aligning buttons left or right depending on
    // whether the floor is odd or even
    className = floor % 2 === 0 ? "left-align-button" : "right-align-button";

    // giving a margin-top of 2% for the top two floors
    const additionalCriteria = index === 0 || index === 1 ? " mt-2" : "";

    return className + additionalCriteria;
  };

  const onClickHandler = (e, floorNumber) => {
    e.preventDefault(); // to suppress default behaviour on button click

    console.log("floor: ", floorNumber);
  };

  return (
    <>
      <div>
        <Grid container justify="center">
          <Grid item sm={4} xs={10}>
            <div className="display-box">
              <Paper>
                <span>QR Code can be displayed here!!!</span>
              </Paper>
            </div>

            <div className="number-box">
              <Paper>
                {floors.map((floor, index) => {
                  return (
                    <Button
                      key={index}
                      className={getClassName(floor, index)}
                      onClick={(e) => onClickHandler(e, floor)}
                    >
                      {floor}
                    </Button>
                  );
                })}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default numberPad;
