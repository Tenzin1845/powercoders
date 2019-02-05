/** HTML view for the ShoppingList. */
class View {
  /**
   * @param model {!Model} App data model
   * @param controller {!Controller} App controller
   */
  constructor(model, controller){
    console.log('View ready!');

    /**@private {!Model} App data model */
    this.model_ = model;

    /**@private {!Controller} App controller */
    this.controller_ = controller;

    /**@private {!HTMLElement} Shopping List element */
    this.shoppingList_ = document.querySelector('ul');

    /**@private {!HTMLElement}Input widget for items*/
     this.inputBox_ =document.getElementById('item');

     /**@private {!HTMLElement} Input widget for quantity */
     this.quantityBox_=document.getElementById('quantity');

     /**@private {!HTMLElement} Button to add an item */
     this.addItemButton_=document.getElementById('add');

     this.addItemButton_.addEventListener('click', () => this.addItem());

  }
  /**
   * update the UI with the shopping List contents.
   */
  update(){
    while (this.shoppingList_.firstChild) {
      this.shoppingList_.firstChild.remove();
    }
    for(let i = 0;i < this.model_.items.length; i++ ) {
      const item = this.model_.items[i];
      const ListItem = item.toListItem();

      const deleteButton = ListItem.querySelector('button');
      deleteButton.addEventListener('click',
          () => this.controller_.deleteItem(i));

      this.shoppingList_.appendChild(ListItem);

    }
    this.inputBox_.value = '';
    this.quantityBox_.value ='';
    this.inputBox_.focus();

  }

  /**
   * Notifies the controller to add an item to the List.
   */
  addItem() {
    const trimmedValue = this.inputBox_.value.trim();
    const trimmedQuantity = this.quantityBox_.value.trim();
    this.controller_.addItem(trimmedValue, trimmedQuantity);
  }
}