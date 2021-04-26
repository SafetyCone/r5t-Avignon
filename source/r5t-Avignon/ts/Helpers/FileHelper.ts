import { BlobHelper } from "./BlobHelper";

export class FileHelper
{
    public static GetArrayBuffer(file: File)
    {
        return BlobHelper.GetArrayBuffer(file);
    }
}