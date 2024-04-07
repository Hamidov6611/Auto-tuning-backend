"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = exports.FileType = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const uuid = require("uuid");
const fs = require("fs");
var FileType;
(function (FileType) {
    FileType["AUDIO"] = "audio";
    FileType["IMAGE"] = "image";
    FileType["VIDEO"] = "video";
})(FileType || (exports.FileType = FileType = {}));
let FileService = class FileService {
    createFile(type, file) {
        try {
            const fileExtension = file.originalname.split('.').pop();
            const fileName = uuid.v4() + '.' + fileExtension;
            const filePath = path.resolve(__dirname, '..', '..', 'uploads', type);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return path.join(type, fileName);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    updateFile(type, file, oldFilePath) {
        try {
            if (oldFilePath) {
                const fullPath = path.resolve(__dirname, '..', '..', 'uploads', oldFilePath);
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath);
                }
            }
            return this.createFile(type, file);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    removeFile(filePath) {
        try {
            const fullPath = path.resolve(__dirname, '..', '..', 'uploads', filePath);
            if (fs.existsSync(fullPath)) {
                fs.unlinkSync(fullPath);
            }
            else {
                throw new Error(`Fayl topilmadi: ${filePath}`);
            }
        }
        catch (e) {
            throw new common_1.HttpException(`Faylni o'chirishda xato: ${e.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map