import React from "react";
import "./styles.css";

import BookList from "./BookList";
import BuchList from "./BuchList";

function App() {
  return (
    <>
      <section className="booklist">
        <BookList />
      </section>
      <section className="booklist">
        <BuchList />
      </section>
    </>
  );
}

export default App;
