const PizzaFilter = ( { items, setFilteredData } ) => {

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
            <div className='flex items-center sm:pl-6 rd:pl-2 rd:pr-2 pl-1 pr-0 sm:gap-3 gap-1.5'>
                <h3 onClick={filterByAll} className='sm:text-[24px] rd:text-[18px] text-[16px] cursor-pointer transition-all hover:text-red-500 font-bold'>Hamısı</h3>
                <h3 onClick={() => filterByCategory('chick')} className='sm:text-[24px] rd:text-[18px] text-[16px] cursor-pointer transition-all hover:text-red-500 font-bold'>Toyuqlu</h3>
                <h3 onClick={() => filterByCategory('meat')} className='sm:text-[24px] rd:text-[18px] text-[16px] cursor-pointer transition-all hover:text-red-500 font-bold'>Ət ilə</h3>
                <h3 onClick={() => filterByCategory('vegan')} className='sm:text-[24px] rd:text-[18px] text-[16px] cursor-pointer transition-all hover:text-red-500 font-bold'>Vegetarian</h3>
                <h3 onClick={() => filterByCategory('spicy')} className='sm:text-[24px] rd:text-[18px] text-[16px] cursor-pointer transition-all hover:text-red-500 font-bold'>Acılı</h3>
            </div>
        </div>
    </div>
  )
}

export default PizzaFilter;