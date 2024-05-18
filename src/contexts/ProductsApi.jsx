import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsApiContext = createContext();

const ProductsApiProvider = ({ children }) => {

  const productApi = "https://papaapi.yetim.me/food";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const productsFunc = async () => {
      try {
        const res = await axios.get(productApi);
        setItems(res.data);
        setFilteredData(res.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    productsFunc();
  }, []);

  return (
    <ProductsApiContext.Provider value={{ items, loading, setFilteredData, filteredData }}>
      {children}
    </ProductsApiContext.Provider>
  );

};

export default ProductsApiProvider;