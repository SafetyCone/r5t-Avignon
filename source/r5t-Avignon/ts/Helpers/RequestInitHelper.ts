import { RequestInitExtensions } from "../Extensions/RequestInitExtensions";

export class RequestInitHelper
{
    public static NewRequest(): RequestInit
    {
        let requestInit = {
            headers: {} // Help out by creating the headers key so it exists.
        };
        return requestInit;
    }

    public static NewGetRequest()
    {
        let requestInit = RequestInitHelper.NewRequest();

        RequestInitExtensions.SetMethodGet(requestInit);

        return requestInit;
    }

    public static NewPostRequest()
    {
        let requestInit = RequestInitHelper.NewRequest();

        RequestInitExtensions.SetMethodPost(requestInit);

        return requestInit;
    }
}