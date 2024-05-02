import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Container from "@mui/material/Container";
const JobCard = () => {
  const [jobs, setJobs] = useState();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json(console.log(response)))
      .then((result) => {
        if (Array.isArray(result.jdList)) {
          setJobs(result.jdList);
          console.log(result.jdList);
        } else {
          console.error("API response does not contain jdList array:", result);
          // Handle the response appropriately
        }
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "20px" }}>
          Find Jobs
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "60px" }}>
          {jobs &&
            jobs.map((job, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Company Name {job.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {job.jobRole}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {job.location}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Estimated Salary : {job.minJdSalary} - {job.maxJdSalary}
                    </Typography>

                    <Typography variant="body2" paragraph>
                      {expanded
                        ? job.jobDetailsFromCompany
                        : `${job.jobDetailsFromCompany.slice(0, 100)}${
                            job.jobDetailsFromCompany.length > 100 ? "..." : ""
                          }`}
                      <Button onClick={toggleExpanded} className="">
                        {expanded ? "view less" : "view more"}
                      </Button>
                    </Typography>


                    <Typography variant="body2" color="text.secondary">
                      Experience Required: {job.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default JobCard;
