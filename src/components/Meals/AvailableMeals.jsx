import Card from '../Ui/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Assorted Sushi',
    description: 'Carefully prepared selection of sushi with fresh fish and vegetables.',
    price: 24.99,
  },
  {
    id: 'm2',
    name: 'Special Temaki',
    description: 'A cone of nori seaweed filled with rice, salmon, cream cheese, and fresh ingredients.',
    price: 14.99,
  },
  {
    id: 'm3',
    name: 'Chicken Yakisoba',
    description: 'Stir-fried noodles with chicken strips, vegetables, and flavorful sauce.',
    price: 16.99,
  },
  {
    id: 'm4',
    name: 'Crispy Hot Roll',
    description: 'Rice rolls filled with salmon and cream cheese, breaded and fried, served with special sauce.',
    price: 19.99,
  },
  {
    id: 'm5',
    name: 'Mixed Teppanyaki',
    description: 'Assortment of grilled meats, shrimp, and vegetables on a hot griddle, accompanied by teriyaki sauce.',
    price: 21.99,
  },
  {
    id: 'm6',
    name: 'Traditional Miso Soup',
    description: 'Miso soup with tofu, scallions, and nori seaweed, perfect for warming the palate.',
    price: 8.99,
  },
  {
    id: 'm7',
    name: 'Crispy Gyoza',
    description: 'Dumplings filled with seasoned pork, steamed and then pan-fried until crispy.',
    price: 10.99,
  },
  {
    id: 'm8',
    name: 'Vegan Temaki',
    description: 'A delicious and healthy temaki with avocado, cucumber, carrot, and sesame sauce.',
    price: 13.99,
  },
  {
    id: 'm9',
    name: 'Shrimp Harumaki',
    description: 'Spring rolls filled with shrimp and vegetables, fried to perfection.',
    price: 11.99,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
    key={meal.id}
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price} 
    />
    ));

    return (
    <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
    )
};

export default AvailableMeals;