import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

export function Search({ setFood}){

    const [search, setSearch] = useState('')


    const handleSearch = (e) => {
        setSearch(e.target.value)
        
        setFood((previousFood) => {
 
            return previousFood.filter((food) => {

             return  food.name.toLowerCase().includes(e.target.value) ? food.name : ''
        });
          });
    }

    return (
        <div>
        <label>Search: </label>
        <Input value={search} type="text" onChange={handleSearch} placeholder="enter searched item"/> 

        </div>
    )
}