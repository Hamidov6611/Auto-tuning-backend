import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as path from 'path';
import * as os from 'os';
import * as uuid from 'uuid';
import * as fs from 'fs';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
  VIDEO = 'video',
}
@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    try {
      const fileExtension = file.originalname.split('.').pop();
      const fileName = uuid.v4() + '.' + fileExtension;
      const filePath = path.resolve(__dirname, '..', '..', 'uploads', type); // Yo'lni o'zgartirish
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
      return path.join(type, fileName);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  updateFile(type: FileType, file, oldFilePath: string): string {
    try {
      // Eski faylni o'chirish
      if (oldFilePath) {
        const fullPath = path.resolve(
          __dirname,
          '..',
          '..',
          'uploads',
          oldFilePath,
        );
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      }

      // Yangi faylni yaratish
      return this.createFile(type, file);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  removeFile(filePath: string): void {
    try {
      const fullPath = path.resolve(__dirname, '..', '..', 'uploads', filePath);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      } else {
        throw new Error(`Fayl topilmadi: ${filePath}`);
      }
    } catch (e) {
      throw new HttpException(
        `Faylni o'chirishda xato: ${e.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  // ...removeFile va boshqa metodlar
}
