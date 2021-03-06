import {API_URL} from '../utils/constants';

export async function getBannerApi() {
    try {
        const url = `${API_URL}/home-banners`;
        const response = await fetch(url);
        const result = await response.json();
    } catch(error) {
        console.log(error)
        return null;
    }
}
