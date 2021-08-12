import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    // setLoading();

    // const res = await fetch('/api/products', {
    //   method: 'GET',
    //   body: JSON.stringify(),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Set loading to true
// export const setLoading = () => {
//   return {
//     type: SET_LOADING,
//   };
// };
