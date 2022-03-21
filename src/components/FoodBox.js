import { Card, Row, Col, Divider, Input, Button } from 'antd';

export function FoodBox({food, setFood}){
 
    const handleDelete = () => {
        setFood((previousFood) => {
          return previousFood.filter((f) => f.name !== food.name)
        })
      }
    return (
    
        <div>   
        <Card>
            <h2>{food.name}</h2>
        </Card>
        <Card>
                <Row><img src={food.image} width={90} alt= {food.name} /></Row>
                <Row> Calories: {food.calories} </Row>
                <Row> Servings: {food.servings}</Row>
                <Row> Total Calories: {food.calories * food.servings}</Row>
                <Button onClick={handleDelete}> Delete </Button>
                
        </Card>
            
        </div>
    )
}