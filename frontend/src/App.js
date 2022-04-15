import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import queueStack from "./images/queueStack.jpg";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Queue Stack Inc.
        </Typography>
        <img src={queueStack} alt="queuestack" height="60" />
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
