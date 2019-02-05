class Controller {
  constructor() {
    console.log('controller running!');

    /**@private {!Model} Application model */

    this.model_ = new Model(this);

  }


  /**
   * Add an item to the shipping List.
   *
   * @param name {string} Name of the  item to add, may not be empty
   * @param quantity {string} The quantity of the item to add, may be empty
   */
   addItem(name,quantity){
     const item = new ShoppingListItem(name,quantity);
     this.model_.append(item);

  }
  /**
   * Delete the i'th item from the List.
   *
   * @param i {number}
   */
  deleteItem (i){
    this.model_.delete(i);
  }
}