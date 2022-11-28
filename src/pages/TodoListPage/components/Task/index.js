import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import {
  Input,
  Button,
  ListItem,
  ListItemIcon,
  Checkbox,
  Box,
} from "@mui/material";

import "./styles.css";

const Task = ({
  tack,
  handleCompleteTask,
  changeTaskValue,
  handleInputChange,
  handleChangeTask,
  handleSaveChangeTask,
  handleClickOpen,
  handleCloseChange,
}) => {
  const { value, isOnChange, complete } = tack;
  return (
    <ListItem className="item">
      <ListItemIcon>
        <Checkbox
          checked={complete}
          name="checked"
          color="primary"
          onClick={handleCompleteTask}
        />
      </ListItemIcon>
      <Box className={complete ? "tackComplete" : "tack"}>
        <Input
          name="title"
          disabled={isOnChange || complete ? true : false}
          value={isOnChange ? value.title : changeTaskValue.title}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          name="description"
          disabled={isOnChange || complete ? true : false}
          value={isOnChange ? value.description : changeTaskValue.description}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          type="date"
          name="dataFinish"
          disabled={isOnChange || complete ? true : false}
          value={isOnChange ? value.dataFinish : changeTaskValue.dataFinish}
          onChange={(event) => handleInputChange(event)}
        />
      </Box>

      <Button
        className={complete ? "done" : ""}
        disabled={complete ? true : false}
        onClick={() =>
          isOnChange ? handleChangeTask() : handleSaveChangeTask()
        }
        variant="contained"
        color="primary"
        startIcon={
          isOnChange ? <BorderColorIcon /> : <CheckCircleOutlineIcon />
        }
      ></Button>

      {isOnChange ? (
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpen}
        ></Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloseIcon />}
          onClick={handleCloseChange}
        ></Button>
      )}
    </ListItem>
  );
};

export default React.memo(Task);
