import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// useParams is returned as an object
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams(); // access via url

  //   categoriesMap
  const { categories } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categories[category]);
  // by default categories is an empty object so this works

  useEffect(() => {
    setProducts(categories[category]); // set the categories with value key of category clicked on
  }, [category, categories]);
  return (
    <div className="category-container">
      {/* this short circuit operator only renders if products are present */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;

// figure this out how url is accessed and displays components
