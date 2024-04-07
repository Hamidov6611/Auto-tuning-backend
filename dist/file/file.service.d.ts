export declare enum FileType {
    AUDIO = "audio",
    IMAGE = "image",
    VIDEO = "video"
}
export declare class FileService {
    createFile(type: FileType, file: any): string;
    updateFile(type: FileType, file: any, oldFilePath: string): string;
    removeFile(filePath: string): void;
}
