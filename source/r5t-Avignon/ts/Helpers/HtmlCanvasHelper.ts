import { BlobHelper } from "./BlobHelper";
import { DataURLHelper } from "./DataURLHelper";

export class HtmlCanvasHelper
{
    public static GetImageFile(canvas: HTMLCanvasElement, fileName: string, imageMimeType: string, lastModified: number = new Date().valueOf()): File
    {
        let dataUrl = canvas.toDataURL(imageMimeType);
        let blob = DataURLHelper.DataURLToBlob(dataUrl);
        let imageFile = BlobHelper.GetBlobAsFile(blob, fileName, lastModified);
        return imageFile;
    }
}