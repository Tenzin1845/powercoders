/**
 * Shopping list model.
 *
 *The list is modelled as an arrey.
 */
class Model {
  /**@param controller {!controller} App controller*/
  constructor(controller) {
    console.log('Model initialised');

    /**@private {!ShoppingListItem[]} Items in the List */
    this.items_ =[];

    /**@private {!View} View for this model.*/
    this.view_ = new View(this.controller);
  }
}