const { connectionKnex } = require('../database/knex/index');

class DessertsRepository {
  async showDesserts(id) {
    const desserts = await connectionKnex('desserts').where({ id }).first();

    const ingredients = await connectionKnex('ingredientsDessert').where({ dish_id: id }).orderBy("ingredients");

    const dessertsWithIngredients = { ...desserts, ingredients };


    return (dessertsWithIngredients);
  }

  async indexDesserts() {

    const desserts = await connectionKnex('desserts').orderBy('name');


    return desserts;


  }





}

module.exports = { DessertsRepository };