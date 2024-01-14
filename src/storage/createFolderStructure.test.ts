import fs from 'fs';
import path from 'path';
import { createFolderStructure } from './createFolderStructure';

// Mock the fs and path modules
jest.mock('fs');
jest.mock('path');

describe('createFolderStructure', () => {
    const mainDirectory = 'testDir';
    const subDirectory = 'subDir';
    const fullPath = `${mainDirectory}/${subDirectory}`;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should create a new directory if it does not exist', () => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);

        (fs.mkdirSync as jest.Mock).mockImplementation(() => {});

        (path.join as jest.Mock).mockReturnValue(fullPath);

        createFolderStructure(mainDirectory, subDirectory);

        expect(fs.existsSync).toHaveBeenCalledWith(fullPath);
        expect(fs.mkdirSync).toHaveBeenCalledWith(fullPath, { recursive: true });
    });

    test('should not create a new directory if it already exists', () => {
        (fs.existsSync as jest.Mock).mockReturnValue(true);

        (path.join as jest.Mock).mockReturnValue(fullPath);

        const consoleSpy = jest.spyOn(console, 'log');

        createFolderStructure(mainDirectory, subDirectory);

        expect(fs.existsSync).toHaveBeenCalledWith(fullPath);
        expect(consoleSpy).toHaveBeenCalledWith(`Directory already exists: ${fullPath}`);
    });
});
