import { RequestInitHelper } from "./RequestInitHelper";

export class RequestHelper
{
    public static NewRequest(): RequestInit
    {
        let request = RequestInitHelper.NewRequest();
        return request;
    }

    public static NewGetRequest()
    {
        let request = RequestInitHelper.NewGetRequest();
        return request;
    }

    public static NewPostRequest()
    {
        let request = RequestInitHelper.NewPostRequest();
        return request;
    }
}