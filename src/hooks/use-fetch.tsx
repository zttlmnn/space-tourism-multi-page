import { useCallback, useReducer } from 'react';
import Data from '../components/models/data-model';

interface DataState {
  data: Data[];
  status: string;
  error: string;
}

type DataAction = 
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: Data[]}
  | { type: 'ERROR'; payload: any }; 


const initialState: DataState = {
  data: [],
  status: 'pending',
  error: '',
};

function dataReducer(state: DataState, action: DataAction) {
  switch (action.type) {
    case 'LOADING': {
      return {
        data: [],
        status: 'pending',
        error: '',
      };
    }
    case 'SUCCESS': {
      return {
        data: action.payload,
        status: 'fulfilled',
        error: '',
      };
    }
    case 'ERROR': {
      return {
        data: [],
        status: 'fulfilled',
        error: action.payload,
      };
    }
    default: 
      return state;
  }

}
/*  */
/* function useFetchData(fetchFunction: (query: string) => Data[]) { */
function useFetchData(fetchFunction: () => Promise<any>) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchData = useCallback(
    async (/* reqData */) => {
      dispatch({ type: 'LOADING' });
      try {
        const resData = await fetchFunction(/* reqData */);
        dispatch({ type: 'SUCCESS', payload: resData });

      } catch (error: any) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    },
    [fetchFunction]
  );


  return {
    fetchData,
    ...state,
  };
}

export default useFetchData;