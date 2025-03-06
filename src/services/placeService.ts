import axios from 'axios';
import { GooglePlaceDetails } from '../interfaces';


export const fetchPlaceDetails = async (placeId: string): Promise<GooglePlaceDetails> => {
    
    try {
        const response = await axios.get(`${process.env.GOOGLE_API_URL}/${placeId}`, {
            headers: {
                'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
                'X-Goog-FieldMask': 'id,name,currentOpeningHours,currentSecondaryOpeningHours,regularOpeningHours,regularSecondaryOpeningHours',
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Failed to retrieve opening hours");
    }
}; 