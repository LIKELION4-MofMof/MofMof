import React from 'react';
import {Link} from "react-router-dom";

export default function Leopard() {
  return (
    <button>
      <Link to={"/leopard-home"}>레오파드</Link>
    </button>
  )
}