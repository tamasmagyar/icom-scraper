import * as fs from 'fs';
import * as path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeDataToFile(data: any, fileLocation: string) {
  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const dateString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

  // Create the complete file path
  const fileName = `${dateString}.json`;
  const filePath = path.join(fileLocation, fileName);

  // Convert data to JSON string
  const dataString = JSON.stringify(data, null, 2); // null and 2 for pretty formatting

  // Write data to file
  fs.writeFile(filePath, dataString, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`Data written to file ${filePath}`);
    }
  });
}