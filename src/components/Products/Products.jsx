import Menu from "../Menu/Menu";
import { data } from "../../store/data";
import { useEffect, useState } from "react";

const Products = () => {
  const [categories,setCategories] = useState([]);
  const [products, setProducts] = useState(data);
  
  useEffect(() => {
    const categ = data.reduce(
      (acc, el) => {
        if (acc.includes(el.category)) return acc;
  
        return [...acc, el.category];
      },["Все товары"]
    );

    setCategories(categ);
  },[data])


    return (
      <>
        <Menu categories={categories}/>
      </>
    );
};

export default Products;
