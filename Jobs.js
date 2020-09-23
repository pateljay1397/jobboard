import React from "react";
//import Typography from '@material-ui/core/Typography';
import Job from "./Job";

export default function jobs({ jobs }) {
  return (
    <div className={"jobs"}>
      <h1>Entry Level Software Jobs</h1>
      {jobs.map((job,i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  );
}
