import { API_URL, SEARCH_HISTORY } from '../utils/constants';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { size } from 'lodash'
import { sortArrayByDate } from '../utils/functions';

// Obteniendo las busquedas
export async function getSearchHistoryApi() {
    // Se ejecuta getSearchHistoryApi y elimino el historial
    // await AsyncStorage.removeItem(SEARCH_HISTORY);
    try {
        const history = await AsyncStorage.getItem(SEARCH_HISTORY);
        if (!history) return [];
        
        return sortArrayByDate(JSON.parse(history));
    } catch (error) {
        console.log(error);
        return []
    }
}

// Actualiza el localStorage para obtener nuevos datos
export async function updateSearchHistoryApi(search) {
    const history = await getSearchHistoryApi();

    // Cuando llega a un limite de historial, que no haga mas push y añada el nuevo como ultima busqueda.
    if(size(history) > 5 ) history.pop();
    history.push({
        search,
        date: new Date()
    });

    await AsyncStorage.setItem(SEARCH_HISTORY, JSON.stringify(history))
}

 export async function searchProductApi(search) {
     try {
         const url = `${API_URL}/products?_q=${search}&_limit=20`;
         const response = await fetch(url);
         const result = await response.json();
         return result;
     } catch (error) {
         console.log(error);
         return null;
     }
 }