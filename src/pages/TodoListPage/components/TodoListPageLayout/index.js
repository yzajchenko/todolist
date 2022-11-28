import React from "react";

import "./styles.css";

import {
  Input,
  TextField,
  Button,
  List,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import Task from "../Task";

const TodoListPageLayout = ({
  handleCreateTask,
  todoListState,
  inputValue,
  handleInput,
  handleRemoveTask,
  handleChangeTask,
  handleSaveChangeTask,
  handleInputChange,
  handleCompleteTask,
  changeTaskValue,
  handleClickOpen,
  handleClose,
  openModal,
  handleCloseChange,
}) => {
  const inOnComplete = todoListState.filter(({ complete }) => complete);
  const inComplete = todoListState.filter(({ complete }) => !complete);
  return (
    <>
      <div className="todo">
        <form onSubmit={handleCreateTask}>
          <TextField
            value={inputValue.title}
            name="title"
            onChange={(event) => handleInput(event)}
            placeholder="Title"
          />
          <TextField
            value={inputValue.description}
            name="description"
            onChange={(event) => handleInput(event)}
            placeholder="Description"
          />
          <TextField
            type="date"
            value={inputValue.dataFinish}
            name="dataFinish"
            onChange={(event) => handleInput(event)}
            placeholder="DataFinish"
          />
          <Button variant="contained" color="primary" type="submit">
            Add Task
          </Button>
        </form>
        <List>
          {[...inComplete, ...inOnComplete].map((task) => {
            const { id, value } = task;
            return (
              <Task
                key={id}
                tack={task}
                handleCompleteTask={() => handleCompleteTask(id)}
                changeTaskValue={(event) => changeTaskValue(event)}
                handleInputChange={(event) => handleInputChange(event)}
                handleChangeTask={(event) => handleChangeTask(id, value)}
                handleSaveChangeTask={() =>
                  handleSaveChangeTask(id, changeTaskValue)
                }
                handleClickOpen={() => handleClickOpen(id)}
                handleCloseChange={() => handleCloseChange(id, value)}
              />
            );
          })}
        </List>

        <Dialog
          open={openModal.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete the task
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleRemoveTask(openModal.index);
                return handleClose();
              }}
              color="primary"
            >
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default TodoListPageLayout;
