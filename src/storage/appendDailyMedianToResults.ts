import * as fs from 'fs';
import { median } from 'median-ts';
import * as path from 'path';
import { Flat } from '../types/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function appendDailyMedianToFile(items: Flat[], fileLocation: string) {
    const filePath = path.join(fileLocation, 'results.json');
  
    // Calculate median
    const prices = items.map(item => item.price);
    const medianPrices = median(prices);
  
    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const dateString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
    // Data to append
    const newData = {
      time: dateString,
      median: medianPrices
    };
  
    // Check if the file exists
    fs.readFile(filePath, 'utf8', (err, data) => {
      let content = [];
  
      if (!err && data) {
        // If file exists and read is successful, parse the existing content
        content = JSON.parse(data);
      }
  
      // Append new data
      content.push(newData);
  
      // Write back to file
      fs.writeFile(filePath, JSON.stringify(content, null, 2), 'utf8', writeErr => {
        if (writeErr) {
          console.error('Error writing file:', writeErr);
        } else {
          console.log(`Data appended to file ${filePath}`);
        }
      });
    });
  }