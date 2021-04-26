/**
 * This class provides values for whether or not some functionality is supported.
 */
export class SupportsHelper
{
    public static BlobSupportsArrayBuffer()
    {
        let blob = new Blob();

        let output = !!blob.arrayBuffer;
        return output;
    }

    public static NavigatorSupportsGeolocationUsingNavigator(navigator: Navigator)
    {
        let output = !!navigator.geolocation;
        return output;
    }

    public static NavigatorSupportsGeolocationUsingWindow(window: Window)
    {
        let output = SupportsHelper.NavigatorSupportsGeolocationUsingNavigator(window.navigator);
        return output;
    }

    public static NavigatorSupportsGeolocation()
    {
        let output = SupportsHelper.NavigatorSupportsGeolocationUsingWindow(window);
        return output;
    }
}