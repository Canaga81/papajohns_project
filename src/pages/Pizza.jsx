import { useContext } from 'react';
import Card from '../components/Card/Card';
import { ProductsApiContext } from '../contexts/ProductsApi';
import PizzaFilter from '../components/PizzaFilter/PizzaFilter';

const Pizza = () => {

  const {items, loading, filteredData, setFilteredData} = useContext(ProductsApiContext);

  return (

    <div className='w-full h-full sm:py-16 py-6 sm:px-6 px-2'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-7'>
          <PizzaFilter setFilteredData={setFilteredData} items={items} />
          <div className='flex items-start justify-center gap-5 flex-wrap'>

            {
              loading ? (
                <h1 className='font-extrabold text-3xl'>Loading...</h1>
              ) : (
                items && filteredData?.filter((item) => item.category === "Pizzalar" )?.map((item) => (
                  <Card key={item.id} name={item.name} image={item.img} composition={item.composition} price={item.price.md} />
                ))
              )
            }

          </div>
        </div>
      </div>
    </div>

  );

}

export default Pizza;