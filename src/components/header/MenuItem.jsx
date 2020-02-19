import React from 'react';

import {
    Link
  } from "react-router-dom";

export default function MenuItem (props) {
    const { label, routerLink } = props;
  return (
    <div className="MenuItem">
       <Link to={routerLink}>{ label }</Link> 
    </div>
  );
}

