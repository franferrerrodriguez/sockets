import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'GET OK'
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {
    console.log(req.params);
    console.log(req.body);

    res.json({
        ok: true,
        message: 'POST OK',
        body: req.body
    });
});

export default router;
