type Item = {
    ID: string,
    name: string,
    quantity: number,
}

type FoodItems = {
    user_id : string,
    food_items: Item[]
}