import React from "react";
import Book from "./Book";

function BookList() {
  return (
    <div>
      <Book
        img="https://images-na.ssl-images-amazon.com/images/I/61eZVvoYYUL._AC_UL200_SR200,200_.jpg"
        title="The cooking book"
        tag="#cookery"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore libero obcaecati, quam reprehenderit,
          molestias sit inventore vitae natus dolorem omnis deserunt ipsum error animi veniam.
        </p>
      </Book>
      <Book
        img="https://images-na.ssl-images-amazon.com/images/I/61iarZaYwGL._AC_UL200_SR200,200_.jpg"
        title="Chakras Healing"
        tag="#wellbeing"
        rating="5"
      />
      <Book
        img="https://images-na.ssl-images-amazon.com/images/I/A1Mlc5xDMZL._AC_UL200_SR200,200_.jpg"
        title="2021 Calendar"
        tag="#calendar"
        review="99"
      />
    </div>
  );
}

export default BookList;
