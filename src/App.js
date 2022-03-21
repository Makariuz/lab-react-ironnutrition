import './App.css';
import foods from './foods.json';
import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {FoodBox} from './components/FoodBox'
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search';
import { v4 } from 'uuid'
import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs'


function App() {

  const [food, setFood] = useState(foods)
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow((previousShow) => {
      return !previousShow;
    });
  };

  return (
    <div className="App">
           <h1>Food List</h1>
           <div className="header">
           <Divider> <span> Add Food </span>
           <button className="show-btn" onClick={handleShow}> {show ? <BsArrowUpCircle /> :  <BsArrowDownCircle />} </button>
           </Divider>
           </div>
           {show && 
           <Card>
             <AddFoodForm setFood={setFood} />
           </Card>
          }
           <Search food={food} setFood={setFood} id={food.id}/>

           <div className="body">

    {food.map((f) => {
     return(
     
      <FoodBox food= { {
          id: v4(),
          name: f.name,
          calories: f.calories,
          image: f.image,
          servings: f.servings
      }} setFood={setFood} />
       
     
    )}
  
    )}

</div>
  
    </div>
  );
}

export default App;
