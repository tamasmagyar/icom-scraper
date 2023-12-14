import fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function writeHtml(html: string, info :string) {
    // Specify the path and filename
    if (!info) {
        info = 'aa'; // Or handle it as you see fit
    }
    const filePath = `./output-${info}.html`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fs.writeFile(filePath, html, (err: any) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Successfully wrote HTML to', filePath);
        }
    });
}