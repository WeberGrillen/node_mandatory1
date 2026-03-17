import { readPage, constructPage } from "./templatingEngine.js";
import fs from 'fs';


const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);

const about = readPage('./public/pages/about/about.html');
export const aboutPage = constructPage(about);

export const notePages = Object.fromEntries(
    fs.readdirSync('./public/pages/notes')
            .filter(file => file.endsWith('.html'))
            .map(file => [
                file.replace('.html', ''),
                constructPage(readPage(`./public/pages/notes/${file}`))
            ])
);