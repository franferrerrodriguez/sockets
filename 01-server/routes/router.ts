import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'GET OK'
    });
});

router.post('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'POST OK'
    });
});

export default router;
