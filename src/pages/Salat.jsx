import { useContext } from 'react'
import { ProductsApiContext } from '../contexts/ProductsApi';
import Card from '../components/Card/Card';

const Salat = () => {
  const {items, loading} = useContext(ProductsApiContext);

  return (
    <div className='w-full h-full sm:py-16 py-6 sm:px-6 px-2'>
      <div className='container mx-auto'>
        <div className='flex items-start justify-center gap-5 flex-wrap'>

          {
            loading ? (
              <h1 className='font-extrabold text-3xl'>Loading...</h1>
            ) : (
              items && items?.filter((item) => item.category === "Salatlar" )?.map((item) => (
                <Card key={item.id} name={item.name} image={item.img} composition={item.composition} price={item.price} />
              ))
            )
          }

        </div>
      </div>
    </div>
  );
}

export default Salat;