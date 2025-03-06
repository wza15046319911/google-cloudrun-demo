import { Router } from 'express';
import { getPlaceDetails } from '../controllers/placeController';
import asyncHandler from 'express-async-handler';

const router = Router();

/**
 * @swagger
 * /api/venues/{id}/opening-hours:
 *   post:
 *     summary: Get venue opening hours
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - google_place_id
 *             properties:
 *               google_place_id:
 *                 type: string
 *                 description: Google Place ID
 *     responses:
 *       200:
 *         description: Successfully retrieved venue opening hours
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       400:
 *         description: Bad request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server internal error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/api/venues/:id/opening-hours', asyncHandler(getPlaceDetails));

/**
 * @swagger
 * /api/venues/{id}/opening-hours:
 *   get:
 *     summary: Test endpoint
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.get('/api/venues/:id/opening-hours', asyncHandler((req, res) => {
    res.status(200).json({
        msg: 'OK',
        code: 200,
        data: null
    });
}));

export default router;