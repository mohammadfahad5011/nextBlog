import React from "react";
import classNames from "classnames";
import "./Test.scss";

const Test = ({className = "Test"}) => {
  const classList = classNames(className, 'bg-red-500 text-red-300');

  return <div data-cy="Test" className={classList}>Content goes here</div>;
};

export default Test;



