import fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function writeHtml(html: string, info :string) {
    if (!info) {
        info = 'aa';
    }
    const filePath = `./output-${info}.html`;

    fs.writeFile(filePath, html, (err: unknown) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Successfully wrote HTML to', filePath);
        }
    });
}