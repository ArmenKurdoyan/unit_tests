import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h3 className="header" data-testid="header-0">
        {title}
      </h3>
      {/* <h3 title="header" className="header">cats</h3> */}
    </>
  );
}
