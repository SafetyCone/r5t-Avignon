export class ConsoleHelper
{
    public static TestConsoleOutput()
    {
        console.error("error"); // This displays with a little red 'x' and a stack trace in the Chrome DevTools console.
        console.warn("warn"); // This displays with a yellow '!' and a stack trace in the Chrome DevTools console.
        console.info("info"); // This jus displays as plain text.
        console.debug("debug"); // Chrome calls this verbose, and hides it by default.
        console.trace("trace"); // This displays a nice stack trace in the Chrome DevTools console
        console.log("log"); // This displays text, just like info().
    }

    public static GetDebug2()
    {
        let getDebug2 = () =>
        {
            return Function.prototype.bind.call(console.log, console);
            // return Function.prototype.bind.call(ConsoleHelper.Test, console);
        };

        let debug2 = getDebug2() as (...data: any[]) => void;;
        return debug2;
    }

    private static Test(this: Console, ...data: any[]): void
    {
        console.log("hello world!");

        this.log(data);
    }
}