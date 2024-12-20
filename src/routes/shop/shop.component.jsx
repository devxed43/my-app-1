import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// Q1: what is this code doing? it's pulling the object from the utils/context?
// Q2: what is the product off of the title of categories?

// {Object.keys(categories).map((title) => (
//   <Fragment key={title}>
//     <h2>{title}</h2>
//     <div className="products-container">
//       {categories[title].map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   </Fragment>
// ))}

// path=":" is for url params
