import { GET_PRODUCT } from "./types";

  const initialState = {
    products: []
    // dialog: false,
    // dialogData: null,
    // history: [],
    // totalPlan: 0,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT:
        console.log("reducer data",GET_PRODUCT);
        
        return {
          ...state,
          products: action?.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  