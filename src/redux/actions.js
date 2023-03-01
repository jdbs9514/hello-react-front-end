import axios from 'axios';

export const fetchMessage = () => async dispatch => {
  const response = await axios.get('/api/messages');
  dispatch({ type: 'FETCH_GREETING', payload: response.data });
};