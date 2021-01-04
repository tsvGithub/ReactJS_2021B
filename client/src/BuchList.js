import React from "react";
import Buch from "./Buch";

import { data } from "./data";

function BuchList() {
  //   console.log(data);
  const buchList = data.map((buch) => {
    console.log(buch);
    return <Buch key={buch.id} buch={buch} />;
  });
  return <div>{buchList}</div>;
}

export default BuchList;
