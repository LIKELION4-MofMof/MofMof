import React from 'react';
import {Link} from "react-router-dom";

export default function Fattail() {
  return (
    <button>
      <Link to={"/fattail-home"}>펫테일</Link>
    </button>
  )
}