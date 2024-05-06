import React from "react";
import "./style.css";
import { LOADING_MSG } from "../../helper/constants";

const Skeleton: React.FC<SkeletonProps> = ({ count = 1 }) => {
  return (
    <span className="skeleton-loader">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} className="skeleton-name">
          {LOADING_MSG}
        </span>
      ))}
    </span>
  );
};

export default React.memo(Skeleton);
