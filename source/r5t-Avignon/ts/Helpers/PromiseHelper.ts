export class PromiseHelper
{
    public static Empty = new Promise<void>((resolve) =>
    {
        resolve();
    });

    public static FromValue<T>(value: T): Promise<T>
    {
        let promise = new Promise<T>((resolve) =>
        {
            resolve(value);
        });
        return promise;
    }
}