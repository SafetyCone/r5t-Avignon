export class Utilities
{
    public static Sleep(milliseconds: number)
    {
        let promise = new Promise(resolve => setTimeout(resolve, milliseconds));
        return promise;
    }
}