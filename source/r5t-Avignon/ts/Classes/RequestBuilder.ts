import { RequestInitHelper } from "../Helpers/RequestInitHelper";

export class RequestBuilder
{
    public static New(url: string)
    {
        let builder = new RequestBuilder(url);
        return builder;
    }


    public readonly Url: string;
    public RequestInit: RequestInit;


    constructor(url: string)
    {
        this.Url = url;
        this.RequestInit = RequestInitHelper.NewRequest();
    }
}