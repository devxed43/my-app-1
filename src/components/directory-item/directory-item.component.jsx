/* eslint-disable react/prop-types */
import "./directory-item.styles.scss";

// each square in the directory of category blocks
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          // custom style dynamic import multiple images
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
