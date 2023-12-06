export interface VideoMetadata {
    fileName: string;
    fileType: string;
    fileSizeKB: number;
    videoWidth?: number;
    videoHeight?: number;
    videoDuration: number;
    lastModified?: Date;
    lastModifiedDate?: Date;
    webkitRelativePath?: string;
    webkitEntry?: FileSystemEntry;
    mimeType: string;
    fileExtension: string;
}
export declare function extractVideoMetadata(videoFile: File): Promise<VideoMetadata>;
export declare function getFileExtension(fileName: string): string;
