import axios from 'axios';

const BASE_URL = 'http://localhost:7000/api/order';

export const getAllOrders = async() => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const order = async(data) => {
    try {
        const response = await axios.post(`${BASE_URL}`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
