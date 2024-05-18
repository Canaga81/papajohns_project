import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductsApiContext = createContext();

const ProductsApiProvider = ({children}) => {

    const productApi = 'https://papaapi.yetim.me/food';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading durumu ekleniyor

  useEffect(() => {
    
    const productsFunc = async () => {
      try {
        const res = await axios.get(productApi);
        setItems(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Veri çekme işlemi tamamlandığında loading durumunu false yap
      }
    }

    productsFunc();

  }, []);

    return (
        <ProductsApiContext.Provider value={{ items, loading }}>
          {children}
        </ProductsApiContext.Provider>
    );
}

export default ProductsApiProvider