import { JavaScriptHelper } from "../Helpers/JavaScriptHelper";
import { HttpRequestContentType } from "../Types/HttpRequestContentType";
import { HttpRequestHeader } from "../Types/HttpRequestHeader";
import { HttpRequestMethod } from "../Types/HttpRequestMethod";

export class RequestInitExtensions
{
    public static SetMethod(requestInit: RequestInit, method: HttpRequestMethod)
    {
        requestInit.method = method;
    }

    public static SetMethodGet(requestInit: RequestInit)
    {
        RequestInitExtensions.SetMethod(requestInit, "GET");
    }

    public static SetMethodPost(requestInit: RequestInit)
    {
        RequestInitExtensions.SetMethod(requestInit, "POST");
    }

    public static EnsureHeadersExists(requestInit: RequestInit)
    {
        if(!JavaScriptHelper.Exists(requestInit.headers))
        {
            requestInit.headers = {};
        }
    }

    public static AddHeader(requestInit: RequestInit, headerKey: HttpRequestHeader, headerValue: string)
    {
        RequestInitExtensions.EnsureHeadersExists(requestInit);

        requestInit.headers[headerKey] = headerValue;
    }

    public static AddContentType(requestInit: RequestInit, contentType: HttpRequestContentType)
    {
        RequestInitExtensions.AddHeader(requestInit, "Content-Type", contentType);
    }

    public static SetJsonApplicationContentType(requestInit: RequestInit)
    {
        RequestInitExtensions.AddContentType(requestInit, "application/json");
    }

    public static SetFormDataBody(requestInit: RequestInit, formData: FormData)
    {
        requestInit.body = formData;
    }

    public static SetFormDataBodyPost(requestInit: RequestInit, formData: FormData)
    {
        RequestInitExtensions.SetFormDataBody(requestInit, formData);

        RequestInitExtensions.SetMethodPost(requestInit);
    }

    public static SetJsonBody(requestInit: RequestInit, body: any)
    {
        let bodyJson = JSON.stringify(body);

        requestInit.body = bodyJson;

        // Communicate that the content type is application/json.
        RequestInitExtensions.SetJsonApplicationContentType(requestInit);
    }

    public static SetJsonBodyPost(requestInit: RequestInit, body: any)
    {
        RequestInitExtensions.SetJsonBody(requestInit, body);

        RequestInitExtensions.SetMethodPost(requestInit);
    }
}