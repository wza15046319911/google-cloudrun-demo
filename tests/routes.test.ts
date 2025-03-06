import request from 'supertest';
import app from '../src/index';
import { server } from '../src/index';

describe('Place Routes', () => {
    it('should return 200 status for valid request', async () => {
        const response = await request(app)
            .get('/api/venues/123/opening-hours')
            .expect(200);
        expect(response.body).toEqual({ msg: 'OK', code: 200, data: null });
    });


    afterAll(done => {
        if (server) {
            server.close(done);
        } else {
            done();
        }
    });
});