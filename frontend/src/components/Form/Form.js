import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    content: "",
    tags: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const classes = useStyles(); // eslint-disable-line no-unused-vars

  const clear = () => {
    setCurrentId(0);
    setPostData({ author: "", title: "", content: "", tags: "", image: "" });
  };

  return (
    <Paper>
      <form
        autocomplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" align="center">
          QueueStack Blog
        </Typography>
        <TextField
          name="author"
          label="Author"
          variant="outlined"
          margin="normal"
          fullWidth
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="content"
          label="Content"
          variant="outlined"
          margin="normal"
          fullWidth
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          margin="normal"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="container"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
