export class DataURLHelper
{
    /**
     * Utility function to convert a canvas to a BLOB.
     * Source: https://stackoverflow.com/a/24015367
     * Example data URL: data:image/gif;base64,R0lGODlh
     */
     public static DataURLToBlob(dataURL: string): Blob
     {
        var BASE64_MARKER = ';base64,';

        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = parts[1];
    
            return new Blob([raw], {type: contentType});
        }
    
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
    
        var uInt8Array = new Uint8Array(rawLength);
    
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
    
        return new Blob([uInt8Array], {type: contentType});
    }
}