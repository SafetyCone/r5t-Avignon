import { RequestInitExtensions } from "./RequestInitExtensions";

export class RequestExtensions
{
    public static SetJsonApplicationContentType(request: RequestInit)
    {
        RequestInitExtensions.AddContentType(request, "application/json");
    }

    public static SetFormDataBody(request: RequestInit, formData: FormData)
    {
        RequestInitExtensions.SetFormDataBody(request, formData);
    }

    public static SetFormDataBodyPost(request: RequestInit, formData: FormData)
    {
        RequestInitExtensions.SetFormDataBodyPost(request, formData);
    }

    public static SetJsonBody(request: RequestInit, body: any)
    {
        RequestInitExtensions.SetJsonBody(request, body);
    }

    public static SetJsonBodyPost(request: RequestInit, body: any)
    {
        RequestInitExtensions.SetJsonBodyPost(request, body);
    }

    public static GetResponse(request: RequestInit, url: string)
    {
        let gettingResponse = fetch(url, request);
        return gettingResponse;
    }

    public static GetTextResult(request: RequestInit, url: string)
    {
        let promise = RequestExtensions.GetResponse(request, url)
            .then((response) => response.text())
            ;

        return promise;
    }

    public static GetJsonResult<T>(request: RequestInit, url: string)
    {
        let result = RequestExtensions.GetResponse(request, url)
            .then((response) => response.json())
            .then((json) => json as T);

        return result;
    }
}