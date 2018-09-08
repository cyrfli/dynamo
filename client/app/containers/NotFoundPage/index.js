import React from "react";
import FormLink from "Components/FormLink";

const NotFound = () => (
  <div className="w-50 mx-auto text-center">
    <h2>Page not found</h2>
    <FormLink to="/">Go home</FormLink>
  </div>
);

export default NotFound;
