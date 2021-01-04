import React from "react";

function Buch({ buch }) {
  const { img, title, tag } = buch;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{tag}</h4>
    </article>
  );
}

export default Buch;
