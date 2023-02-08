const { connectionKnex } = require('../database/knex/index');

class DrinksRepository {
  async showDrinks(id) {
    const drinks = await connectionKnex('drinks').where({ id }).first();

    const ingredients = await connectionKnex('ingredientsDrink').where({ dish_id: id }).orderBy("ingredients");

    const drinkWithIngredients = { ...drinks, ingredients };

    return (drinkWithIngredients);
  }

  async indexDrinks() {

    const drinks = await connectionKnex('drinks').orderBy('name');


    return drinks;


  }





}

module.exports = { DrinksRepository };