export class Stringification
{
    /**
     * Dummy op.
     */
    public static FromString(string: string)
    {
        return string;
    }

    public static Default<T>(value: T)
    {
        let output = `${value}`;
        return output;
    }
}