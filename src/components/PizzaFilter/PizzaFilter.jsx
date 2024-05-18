const PizzaFilter = ( {items, setFilteredData} ) => {

    const filterByCategory = (category) => {
        const filteredData = items.filter(item => item.cath && item.cath.includes(category));
        setFilteredData(filteredData);
      };
    
      const filterByAll = () => {
        setFilteredData(items);
      };

  return (
    <div className='h-[90px] leading-[90px] bg-promoBg '>
        <div className='container mx-auto'>
            <div className='flex items-center pl-6 gap-3'>
                <h3 onClick={filterByAll} className='text-[18px] cursor-pointer transition-all hover:text-red-500'>Hamısı</h3>
                <h3 onClick={() => filterByCategory('chick')} className='text-[18px] cursor-pointer transition-all hover:text-red-500'>Toyuqlu</h3>
                <h3 onClick={() => filterByCategory('meat')} className='text-[18px] cursor-pointer transition-all hover:text-red-500'>Ət ilə</h3>
                <h3 onClick={() => filterByCategory('vegan')} className='text-[18px] cursor-pointer transition-all hover:text-red-500'>Vegetarian</h3>
                <h3 onClick={() => filterByCategory('spicy')} className='text-[18px] cursor-pointer transition-all hover:text-red-500'>Acılı</h3>
            </div>
        </div>
    </div>
  )
}

export default PizzaFilter;