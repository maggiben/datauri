// @flow

import fs from 'fs';

export const exists = (filename: string) : Promise<boolean> => new Promise(resolve => {
  return fs.exists(filename, resolve);
});

export const readFile = (filename: string) : Promise<string> => new Promise((resolve, reject) => {
  return fs.readFile(filename, 'utf8', (error: Error, data?: string) => {
    if (error) {
      return reject(error);
    } else {
      return resolve(data);
    }
  });
});

export const writeFile = (filename: string, content: any) : Promise<void | Error> => new Promise((resolve, reject) => {
  return fs.writeFile(filename, content, (error: Error) => {
    if (error) {
      return reject(error);
    } else {
      return resolve();
    }
  });
});

