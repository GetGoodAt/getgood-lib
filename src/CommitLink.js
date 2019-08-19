import React from "react";

import { GoMarkGithub as GitHubIcon } from "react-icons/go";

const CommitLink = ({ repo, commit, label = "Checkout this commit" }) => {
  return (
    <div className="CommitLink">
      <div className="GitHubIcon__Wrap">
        <GitHubIcon />
      </div>
      <div className="CommitLink__Label">
        <a href={`https://github.com/${repo}/commit/${commit}`}>{label}</a>
      </div>
    </div>
  );
};

export default CommitLink;
