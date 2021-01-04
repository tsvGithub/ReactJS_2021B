import React from "react";

// const img = "https://images-na.ssl-images-amazon.com/images/I/61eZVvoYYUL._AC_UL200_SR200,200_.jpg";
// const title = "The cooking book";
// const tag = "#cookery";

// const book = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/61eZVvoYYUL._AC_UL200_SR200,200_.jpg",
//   title: "The cooking book",
//   tag: "#cookery",
// };
function Book(props) {
  //   console.log(props);
  const { img, title, tag, rating, review, children } = props;
  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Tag tag={tag} />

      {rating ? <h3>Rating: {rating}</h3> : null}
      {review ? <h3>Review: {review}</h3> : null}

      {children}
      {/* {console.log(props)} */}
    </article>
  );
}

const Image = ({ img }) => {
  return <img src={img} alt="" />;
};

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};
const Tag = ({ tag }) => {
  return <h4>{tag}</h4>;
};

export default Book;
