export class ErrorHelper
{
    public static readonly UnknownLineNumber = -1;
    public static readonly UnknownColumn = -1;


    public static IsErrorEvent(x: any): x is ErrorEvent
    {
        return x instanceof ErrorEvent;
    }

    public static IsError(x: any): x is Error
    {
        return x instanceof Error
    }
}