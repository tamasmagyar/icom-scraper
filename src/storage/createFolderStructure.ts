import fs from 'fs';
import path from 'path';

export function createFolderStructure(mainDirectory: string, subDirectory: string) {
    const fullPath = path.join(mainDirectory, subDirectory);

    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Directory created: ${fullPath}`);
    } else {
        console.log(`Directory already exists: ${fullPath}`);
    }
}
