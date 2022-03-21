import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import { v4 } from 'uuid'


export function AddFoodForm({setFood}){

    const [addFood, setAddFood] = useState('')
    const [addImg, setAddImg] = useState('')
    const [addCalories, setAddCalories] = useState('')
    const [addServings, setAddServings] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        setFood((previousInput) => {
          return [
            ...previousInput,
            {
              id: v4(),
              name: addFood,
              image: addImg,
              calories: addCalories,
              servings: addServings
            },
          ];
        });
        setAddFood('')
        setAddImg('')
        setAddCalories('')
        setAddServings('')
      };

    return(
        <div>
               <form onSubmit={handleSubmit}>
               <label > Name: </label> 
               <Input name="food" value={addFood} type="text" onChange={(event) => setAddFood(event.target.value)} />  
               <label > Image: </label> 
               <Input name="image" value={addImg} type="text" onChange={(event) => setAddImg(event.target.value)} />  
               <label > Calories: </label> 
               <Input name="calories" value={addCalories} type="number" onChange={(event) => setAddCalories(event.target.value)} />  
               <label  > Servings: </label> 
               <Input name="servings" value={addServings} type="number" onChange={(event) => setAddServings(event.target.value)} />  
               <button type="submit"> Add </button>
                </form>
            
        </div>
    )
}