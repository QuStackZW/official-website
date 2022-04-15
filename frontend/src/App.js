import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import queueStack from "./images/queueStack.jpg";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Queue Stack Inc.
        </Typography>
        <img
          src={queueStack}
          className={classes.image}
          alt="queuestack"
          height="60px"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <Posts />
            </Grid>
            <Grid item xs={12} md={6}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
