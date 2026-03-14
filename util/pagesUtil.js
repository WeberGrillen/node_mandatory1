import { readPage, constructPage } from "./templatingEngine.js";


const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);

const about = readPage('./public/pages/about/about.html');
export const aboutPage = constructPage(about);