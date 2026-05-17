import axios from 'axios';
import constants from './constants';

//API Access to front-end JSON data transformation or decoder
const API = axios.create({
    baseURL: `${constants.HOST}/users`,
});

//fetch users
export const fetchUsers = (user) => API.get('/', user);

//create user
export const createUser = (user) => API.post('/', user);

//UPDATE USER
export const updateUser = (id, user) => API.put(`/${id}`, user);

//delete user
export const deleteUser = (id) => API.delete(`/${id}`);

//login user
export const loginUser = (credentials) => API.post('/login', credentials);