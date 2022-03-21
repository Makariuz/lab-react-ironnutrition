import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

export function Search({id, food, setFood}){

    const [search, setSearch] = useState('')


      // handle tweet deletion
    const handleFilter = () => {
        setFood((previousTweets) => {
        // return the new array or filtered tweets
        return previousTweets.filter((food) => {
            // a tweet is gonna stay in the array if its id is different from the the id of the curretn tweet
            return food.id !== id;
        });
        });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setFood((previousFood) => {
            // return the new array or filtered tweets
            return previousFood.filter((food) => {
              // a tweet is gonna stay in the array if its id is different from the the id of the curretn tweet
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