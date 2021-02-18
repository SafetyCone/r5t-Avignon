import { JavaScriptHelper } from "./JavaScriptHelper";

export class RequestInitHelper
{
    public static EnsureHeadersExists(requestInit: RequestInit)
    {
        if(!JavaScriptHelper.Exists(requestInit.headers))
        {
            requestInit.headers = {};
        }
    }

    public static NewRequestInit(): RequestInit
    {
        let requestInit = {
            headers: {} // Help out by making the headers key exist.
        };
        return requestInit;
    }

    public static AddHeader(requestInit: RequestInit, headerKey: string, headerValue: string)
    {
        RequestInitHelper.EnsureHeadersExists(requestInit);

        requestInit.headers[headerKey] = headerValue;
    }

    public static SetMethod(requestInit: RequestInit, method: "GET" | "POST")
    {
        requestInit.method = method;
    }

    public static SetJsonApplicationContentType(requestInit: RequestInit)
    {
        RequestInitHelper.AddHeader(requestInit, "Content-Type", "application/json");
    }

    public static SetJsonBodyPost(requestInit: RequestInit, body: any)
    {
        let bodyJson = JSON.stringify(body);

        RequestInitHelper.SetMethod(requestInit, "POST");
        RequestInitHelper.SetJsonApplicationContentType(requestInit);
        requestInit.body = bodyJson;
    }
}