import fs from 'fs';

export function constructPage(page, options = {}) {
    const header = readPage('./public/components/header/header.html');
    const sidebar = readPage('./public/components/sidebar/sidebar.html');
    // const footer = readPage('./public/components/footer/footer.html')

    const result = header +  sidebar + page;
    console.log(result);
    return result

}


export function readPage(path) {
    return fs.readFileSync(path).toString();
}