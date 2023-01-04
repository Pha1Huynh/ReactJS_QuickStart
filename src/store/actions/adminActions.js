import { getAllUsers } from '~/services/adminService';

export const fetchAllUsers = () => async (dispatch) => {
  let res = await getAllUsers();

  dispatch(setTodo(res.data));
};
export const setTodo = (data) => ({
  type: 'SET_TODOS',
  data: data,
});
