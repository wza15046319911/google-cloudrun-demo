import axios from 'axios';
import { fetchPlaceDetails } from '../src/services/placeService';
import { GooglePlaceDetails } from '../src/interfaces';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('placeService', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        process.env.GOOGLE_API_URL = 'https://places.googleapis.com/v1/places';
        process.env.GOOGLE_API_KEY = 'test-api-key';
    });

    describe('fetchPlaceDetails', () => {
        it('应该成功获取地点详情', async () => {
            const mockPlaceDetails: GooglePlaceDetails = {

                "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw",
                "id": "ChIJj61dQgK6j4AR4GeTYWZsKWw",
                "regularOpeningHours": {
                    "openNow": false,
                    "periods": [
                        {
                            "open": {
                                "day": 1,
                                "hour": 8,
                                "minute": 0
                            },
                            "close": {
                                "day": 1,
                                "hour": 17,
                                "minute": 0
                            }
                        },
                        {
                            "open": {
                                "day": 2,
                                "hour": 8,
                                "minute": 0
                            },
                            "close": {
                                "day": 2,
                                "hour": 17,
                                "minute": 0
                            }
                        },
                        {
                            "open": {
                                "day": 3,
                                "hour": 8,
                                "minute": 0
                            },
                            "close": {
                                "day": 3,
                                "hour": 17,
                                "minute": 0
                            }
                        },
                        {
                            "open": {
                                "day": 4,
                                "hour": 8,
                                "minute": 0
                            },
                            "close": {
                                "day": 4,
                                "hour": 17,
                                "minute": 0
                            }
                        },
                        {
                            "open": {
                                "day": 5,
                                "hour": 8,
                                "minute": 0
                            },
                            "close": {
                                "day": 5,
                                "hour": 17,
                                "minute": 0
                            }
                        }
                    ],
                    "weekdayDescriptions": [
                        "Monday: 8:00 AM – 5:00 PM",
                        "Tuesday: 8:00 AM – 5:00 PM",
                        "Wednesday: 8:00 AM – 5:00 PM",
                        "Thursday: 8:00 AM – 5:00 PM",
                        "Friday: 8:00 AM – 5:00 PM",
                        "Saturday: Closed",
                        "Sunday: Closed"
                    ],
                    "nextOpenTime": "2025-03-06T16:00:00Z"
                },
                "currentOpeningHours": {
                    "openNow": false,
                    "periods": [
                        {
                            "open": {
                                "day": 1,
                                "hour": 8,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 10
                                }
                            },
                            "close": {
                                "day": 1,
                                "hour": 17,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 10
                                }
                            }
                        },
                        {
                            "open": {
                                "day": 2,
                                "hour": 8,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 11
                                }
                            },
                            "close": {
                                "day": 2,
                                "hour": 17,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 11
                                }
                            }
                        },
                        {
                            "open": {
                                "day": 3,
                                "hour": 8,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 5
                                }
                            },
                            "close": {
                                "day": 3,
                                "hour": 17,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 5
                                }
                            }
                        },
                        {
                            "open": {
                                "day": 4,
                                "hour": 8,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 6
                                }
                            },
                            "close": {
                                "day": 4,
                                "hour": 17,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 6
                                }
                            }
                        },
                        {
                            "open": {
                                "day": 5,
                                "hour": 8,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 7
                                }
                            },
                            "close": {
                                "day": 5,
                                "hour": 17,
                                "minute": 0,
                                "date": {
                                    "year": 2025,
                                    "month": 3,
                                    "day": 7
                                }
                            }
                        }
                    ],
                    "weekdayDescriptions": [
                        "Monday: 8:00 AM – 5:00 PM",
                        "Tuesday: 8:00 AM – 5:00 PM",
                        "Wednesday: 8:00 AM – 5:00 PM",
                        "Thursday: 8:00 AM – 5:00 PM",
                        "Friday: 8:00 AM – 5:00 PM",
                        "Saturday: Closed",
                        "Sunday: Closed"
                    ],
                    "nextOpenTime": "2025-03-06T16:00:00Z"
                }

            }
            mockedAxios.get.mockResolvedValueOnce({ data: mockPlaceDetails });
            const result = await fetchPlaceDetails('test-place-id');
            expect(result).toEqual(mockPlaceDetails);
            expect(mockedAxios.get).toHaveBeenCalledWith(
                'https://places.googleapis.com/v1/places/test-place-id',
                {
                    headers: {
                        'X-Goog-Api-Key': 'test-api-key',
                        'X-Goog-FieldMask': 'id,name,currentOpeningHours,currentSecondaryOpeningHours,regularOpeningHours,regularSecondaryOpeningHours',
                    }
                }
            );
        });

        it('应该在请求失败时抛出错误', async () => {
            mockedAxios.get.mockRejectedValueOnce(new Error('API 错误'));
            await expect(fetchPlaceDetails('test-place-id')).rejects.toThrow('Failed to retrieve opening hours');
            expect(mockedAxios.get).toHaveBeenCalled();
        });
    });
});