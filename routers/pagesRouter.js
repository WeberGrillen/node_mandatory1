import { Router } from 'express';

import { frontpagePage, aboutPage, notePages } from '../util/pagesUtil.js';

const router = Router();

router.get('/', (req, res) => {
    res.send(frontpagePage);
});

router.get('/notes/:note', (req, res) => {
    const page = notePages[req.params.note];

    if (!page) {
        return res.status(404).send({ errorMessage: `No note found with by: ${req.params.note} `})
    }
    res.send(page)
});

router.get('/about', (req, res) => {
    res.send(aboutPage);
});

export default router;