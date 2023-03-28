import Slider from './Slider';
import Card from './Card';
import styled from 'styled-components';
import {lizardcardlist} from './Lizardmainlist';
import { useEffect, useState } from 'react';
import { categories } from './filter';

function FilterButton({categories, catergory, setCategory}){
  const makeCategories = () =>{
    if(categories.length === 0) return;

    return categories.map((item, index)=>(
      <StyledCategoryButton key={index} className={item.value === catergory ? "category-child selected" : "category-child"} onClick={()=>{setCategory(item.value); }} >{item.name}</StyledCategoryButton>
    ))
  }

  return (
    <div>
      <div className="category-set">{makeCategories()}</div>
    </div>
  );

}

export default function Main() {
  const [ lizardList, setLizardList ] = useState(lizardcardlist)
  const [ category, setCategory] = useState('all');

  useEffect(()=>{
    setLizardList(
      lizardcardlist.filter((item)=>
      {if(category === "all") return true;
      if(category === item.category) return true;})
    )
  }, [category])

  return (
    <>
    <Slider />
    <FilterButton categories={categories}
        category={category}
        setCategory={setCategory}/>
    <CardList>
      {lizardList.map((item) => 
        (<Card key={item.id} name={item.name} imgUrl={item.imgUrl} link={item.link} />)
      )}
      
    </CardList>
    </>
    
  )
}

const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-around; */
  padding: 20px;
  align-items: center;
  gap: 17px;
`
const StyledCategoryButton = styled.button`
  /* background-color: aqua; */
  padding: 20px 0 0 20px;
`