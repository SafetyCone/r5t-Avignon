import { SupportsHelper } from "./SupportsHelper";

export class BlobHelper
{
    /**
     * Slower, older, for compatibility with iPhone 5/6 versions of Safari. See: https://caniuse.com/?search=blob.arraybuffer
     */
    public static GetArrayBufferUsingFileReader(blob: Blob)
    {
        let promise = new Promise<ArrayBuffer>((resolve) =>
        {
            // Source: https://stackoverflow.com/a/15981017/10658484
            let fileReader = new FileReader();
            fileReader.onload = (event) => {
                resolve(event.target.result as ArrayBuffer);
            };
            fileReader.readAsArrayBuffer(blob);
        });
        return promise;
    }

    public static GetArrayBufferDirectly(blob: Blob)
    {
        let gettingArrayBuffer = blob.arrayBuffer();
        return gettingArrayBuffer;
    }

    public static GetArrayBuffer(blob: Blob)
    {
        let currentEnvironmentBlobSupportsArrayBuffer = SupportsHelper.BlobSupportsArrayBuffer();
        if(currentEnvironmentBlobSupportsArrayBuffer)
        {
            return BlobHelper.GetArrayBufferDirectly(blob);
        }
        else
        {
            return BlobHelper.GetArrayBufferUsingFileReader(blob);
        }
    }

    public static GetBlobAsFile(blob: Blob, fileName: string, lastModified: number = new Date().valueOf()): File
    {
        let file = new File([blob], fileName,
            {
                type: blob.type,
                lastModified: lastModified.valueOf(), 
            });
        return file;
    }
}