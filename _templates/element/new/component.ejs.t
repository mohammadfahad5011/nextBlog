---
to: src/elements/<%= h.changeCase.lower(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React from "react";
import classNames from "classnames";
import "./<%= h.changeCase.pascalCase(name) %>.scss";

const <%= h.changeCase.pascalCase(name) %> = ({className = "<%= h.changeCase.pascalCase(name) %>"}) => {
  const classList = classNames(className, 'bg-red-500 text-red-300');

  return <div data-cy="<%= h.changeCase.pascalCase(name) %>" className={classList}>Content goes here</div>;
};

export default <%= h.changeCase.pascalCase(name) %>;



