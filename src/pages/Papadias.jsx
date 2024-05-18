import { useContext } from 'react';
import Card from '../components/Card/Card';
import { ProductsApiContext } from '../contexts/ProductsApi';

const Papadias = () => {

  const {items, loading} = useContext(ProductsApiContext);

  return (
    <div className='w-full h-full sm:py-16 py-6 sm:px-6 px-2'>
      <div className='container mx-auto'>
        <div className='flex items-start justify-center gap-5 flex-wrap'>

          {
            loading ? (
              <div>Loading...</div> // Yükleniyor göstergesi
            ) : (
              items && items?.filter((item) => item.category === "Papadias" )?.map((item) => (
                <Card key={item.id} name={item.name} image={item.img} composition={item.composition} price={item.price} />
              ))
            )
          }

        </div>
      </div>
    </div>
  );
}

export default Papadias;