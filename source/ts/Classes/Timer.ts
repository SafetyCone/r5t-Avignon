import { TimeHelper } from "../Helpers/TimeHelper";

export class Timer
{
    public static async TimeExecution<T>(call: () => Promise<T>, elapsedSecondsSink: (elapsedSeconds: number) => Promise<void>): Promise<T>
    {
        let beginMilliSeconds = Date.now();

        let output = await call();

        let endMilliseconds = Date.now();
        let elapsedSeconds = (endMilliseconds - beginMilliSeconds) / TimeHelper.MillisecondsPerSecond;

        await elapsedSecondsSink(elapsedSeconds);

        return output;
    }
}