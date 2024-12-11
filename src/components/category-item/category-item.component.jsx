/* eslint-disable react/prop-types */
import "./category-item.styles.scss";

// each square in the directory of category blocks
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          // custom style dynamic import multiple images
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
