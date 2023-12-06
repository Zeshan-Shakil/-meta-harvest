"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExtension = exports.extractVideoMetadata = void 0;
function extractVideoMetadata(videoFile) {
    return new Promise(function (resolve, reject) {
        var video = document.createElement("video");
        video.preload = "metadata";
        video.addEventListener("loadedmetadata", function () {
            try {
                var fileSizeInKB = Math.ceil(videoFile.size / 1024);
                var videoDurationInSeconds = Math.ceil(video.duration);
                // Type assertions for webkitGetAsEntry
                var metadata = {
                    fileName: videoFile.name,
                    fileType: videoFile.type,
                    fileSizeKB: fileSizeInKB,
                    videoWidth: video.videoWidth,
                    videoHeight: video.videoHeight,
                    videoDuration: videoDurationInSeconds,
                    lastModified: videoFile.lastModified
                        ? new Date(videoFile.lastModified)
                        : undefined,
                    webkitRelativePath: videoFile.webkitRelativePath,
                    mimeType: videoFile.type,
                    fileExtension: getFileExtension(videoFile.name), // Add file extension
                    // Add other properties accordingly
                };
                resolve(metadata);
            }
            catch (error) {
                reject(error);
            }
        });
        video.src = URL.createObjectURL(videoFile);
    });
}
exports.extractVideoMetadata = extractVideoMetadata;
function getFileExtension(fileName) {
    var parts = fileName.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : "";
}
exports.getFileExtension = getFileExtension;
