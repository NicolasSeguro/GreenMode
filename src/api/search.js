import AsyncStorage from '@react-native-async-storage/async-storage';
import { SEARCH_HISTORY } from '../utils/constants';

// Obteniendo las busquedas
export async function getSearchHistoryApi() {
    return [];
}

// Actualiza el localStorage para obtener nuevos datos
export async function updateSearchHistoryApi(search) {
    const history = await getSearchHistoryApi();

    history.push({
        search,
        date: new Date()
    });

    await AsyncStorage.setItem(SEARCH_HISTORY, JSON.stringify(history))
}