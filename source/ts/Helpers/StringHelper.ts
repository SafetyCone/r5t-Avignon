export class StringHelper
{
    public static IsEmpty(string: string): boolean
    {
        let output = string == '';
        return output;
    }

    public static IsNonEmpty(string: string): boolean
    {
        let output = !StringHelper.IsEmpty(string);
        return output;
    }
}