import {
  ADD_SHIPPING,
  FIND_ONE,
  CHECK_OUT,
  GET_ITEM,
  SUB_SHIPPING,
  GET_DOG_ITEM
} from "../actions/cart-type";

const initialState = {
  addedDogProductsItems: [],
  total: 0,
  itemDetails: [],
  dogProducts: []
};

const dogCartReducer = (state = initialState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === "ADD_TO_CART_DOG") {
    let addedItem = state.dogProducts.find(item => item.id === action.id);

    //check if the action id exists in the addedItems
    let existed_item = state.addedDogProductsItems.find(
      item => action.id === item.id
    );
    if (existed_item) {
      parseInt((addedItem.quantity += 1));
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedDogProductsItems: [...state.addedDogProductsItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === "REMOVE_ITEM_DOG") {
    let itemToRemove = state.addedDogProductsItems.find(
      item => action.id === item.id
    );
    let new_items = state.addedDogProductsItems.filter(
      item => action.id !== item.id
    );

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedDogProductsItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === "ADD_QUANTITY_DOG") {
    let addedItem = state.dogProducts.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === "SUB_QUANTITY_DOG") {
    let addedItem = state.dogProducts.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedDogProductsItems.filter(
        item => item.id !== action.id
      );
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedDogProductsItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === SUB_SHIPPING) {
    return {
      ...state,
      total: state.total - 6
    };
  }
  if (action.type === GET_ITEM) {
    return {
      ...state,
      dogProducts: action.payload.data.products
    };
  }

  if (action.type === GET_DOG_ITEM) {
    return {
      ...state,
      dogProducts: action.payload.data.products
    };
  }

  if (action.type === FIND_ONE) {
    return {
      ...state,
      itemDetails: [action.payload.data.product]
    };
  }
  if (action.type === CHECK_OUT) {
    return {
      ...state,
      dogProducts: action.payload.data.nodemailer
    };
  } else {
    return state;
  }
};

export default dogCartReducer;
