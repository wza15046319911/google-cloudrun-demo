import { Response, NextFunction } from 'express';
import { TypedRequest, PlaceDetailsRequest, ApiResponse } from '../interfaces';
import { fetchPlaceDetails } from '../services/placeService';

export const getPlaceDetails = async (
    req: TypedRequest<PlaceDetailsRequest>,
    res: Response<ApiResponse>,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { google_place_id } = req.body;

        if (!google_place_id) {
            res.status(400).json({
                msg: 'Missing required parameter: google_place_id',
                code: 400,
                data: null
            });
            return;
        }
        if (!process.env.GOOGLE_API_KEY) {
            res.status(500).json({
                msg: 'GOOGLE_API_KEY is not set',
                code: 500,
                data: null
            });
            return;
        }
        
        if (!process.env.GOOGLE_API_URL) {
            res.status(500).json({
                msg: 'GOOGLE_API_URL is not set',
                code: 500,
                data: null
            });
            return;
        }

        const placeDetails = await fetchPlaceDetails(google_place_id);

        res.status(200).json({
            msg: 'success',
            code: 200,
            data: placeDetails
        });
    } catch (error: any) {
        res.status(500).json({
            msg: `Server internal error: ${error.message}`,
            code: 500,
            data: null
        });
    }
}; 