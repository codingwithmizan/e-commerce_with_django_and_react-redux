import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../types/productTypes";

const initialStateForProductList = {
  loading: true,
  products: [],
  error: "",
};
const initialStateForProductDetails = {
  loading: true,
  product: {},
  error: "",
};

export const productListReducer = (
  state = initialStateForProductList,
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
        error: "",
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: "",
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = initialStateForProductDetails,
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        product: {},
        error: "",
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: "",
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        product: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
