import { Request } from 'express';

export interface PlaceDetailsRequest {
    google_place_id: string;
}

export interface OpeningHoursPeriod {
    close: { day: number; time: string };
    open: { day: number; time: string };
}

export interface OpeningHours {
    open_now: boolean;
    periods: OpeningHoursPeriod[];
    weekday_text: string[];
}

// Google Places API 响应接口
export interface GoogleOpeningHoursPeriod {
    open: {
        day: number;
        hour: number;
        minute: number;
        date?: {
            year: number;
            month: number;
            day: number;
        }
    };
    close: {
        day: number;
        hour: number;
        minute: number;
        date?: {
            year: number;
            month: number;
            day: number;
        }
    };
}

export interface GoogleOpeningHours {
    openNow: boolean;
    periods: GoogleOpeningHoursPeriod[];
    weekdayDescriptions: string[];
    nextOpenTime?: string;
    nextCloseTime?: string;
}

export interface GooglePlaceDetails {
    name: string;
    id: string;
    regularOpeningHours: GoogleOpeningHours;
    currentOpeningHours: GoogleOpeningHours;
}

export interface ApiResponse {
    msg: string;
    code: number;
    data: GooglePlaceDetails | null;
}

export interface TypedRequest<T> extends Request {
    body: T;
}