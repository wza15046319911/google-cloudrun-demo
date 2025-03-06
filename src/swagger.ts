import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { Express } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Venue Opening Hours API',
            version: '1.0.0',
            description: 'API documentation for retrieving venue opening hours',
        },
        servers: [
            {
                url: process.env.NODE_ENV === 'production'
                    ? 'https://your-production-url.com'
                    : 'http://localhost:8080',
                description: process.env.NODE_ENV === 'production' ? 'Production' : 'Development',
            },
        ],
        components: {
            schemas: {
                GooglePlaceDetails: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        id: { type: 'string' },
                        regularOpeningHours: {
                            type: 'object',
                            properties: {
                                openNow: { type: 'boolean' },
                                periods: { type: 'array' },
                                weekdayDescriptions: { type: 'array', items: { type: 'string' } },
                            },
                        },
                        currentOpeningHours: {
                            type: 'object',
                            properties: {
                                openNow: { type: 'boolean' },
                                periods: { type: 'array' },
                                weekdayDescriptions: { type: 'array', items: { type: 'string' } },
                            },
                        },
                    },
                },
                ApiResponse: {
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                        code: { type: 'number' },
                        data: {
                            oneOf: [
                                { type: 'object', $ref: '#/components/schemas/GooglePlaceDetails' },
                                { type: 'null' }
                            ]
                        },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        msg: { type: 'string' },
                        code: { type: 'number' },
                        data: { type: 'null' },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
};

const specs = swaggerJsDoc(options);

export const swagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}