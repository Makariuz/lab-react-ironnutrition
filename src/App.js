import './App.css';
import foods from './foods.json';
import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {FoodBox} from './components/FoodBox'
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search';
import { v4 } from 'uuid'


function App() {

  const [food, setFood] = useState(foods)

  return (
    <div className="App">
           <h1>Food List</h1>
           <Divider> Add Food </Divider>
           <Card>
             <AddFoodForm setFood={setFood} />
           </Card>
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
