import {API_URL} from '../utils/constants'

export async function getLastProductsApi(limit = 10) {
    try {
        /* Endpoint y querys de la documentación de Strapi */
        const url = `${API_URL}/productos?_limit=${limit}&_sort=createdAt:DESC`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        return null
    }
}