const { connectionKnex } = require('../database/knex/index');

class DishesRepository {
  async showDishes(id) {
    const dishes = await connectionKnex('dishes').where({ id }).first();

    const ingredients = await connectionKnex('ingredients').where({ dish_id: id }).orderBy("ingredients");

    const dishWithIngredients = { ...dishes, ingredients };

    return (dishWithIngredients);
  }

  async indexDishes() {

    const dishes = await connectionKnex('dishes').orderBy('name');


    return dishes;


  }

  async listImages(image) {
    const images = await connectionKnex('dishes').where({ image }).first();


    return images;
  }

  async searchDish(name, ingredients) {

    const dishes = await connectionKnex('dishes').where({ name }).orderBy('name');

    return dishes



  }
}







module.exports = { DishesRepository };