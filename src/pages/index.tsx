import { NextPage } from "next";
import { Layout } from "../components/layouts";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { EntryList, NewEntry } from "../components/entries";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />
            <CardContent>
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In progress" />
            <CardContent>
              <EntryList status="inProgress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
            <CardContent>
              <EntryList status="done" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
