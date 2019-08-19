import React from "react";

import { GoMarkGithub as GitHubIcon } from "react-icons/go";

const BranchLink = ({ repo, branch, label = "Checkout this branch" }) => {
  return (
    <div className="BranchLink">
      <div className="GitHubIcon__Wrap">
        <GitHubIcon />
      </div>
      <div className="BranchLink__Label">
        <a href={`https://github.com/${repo}/tree/${branch}`}>{label}</a>
      </div>
    </div>
  );
};

export default BranchLink;
