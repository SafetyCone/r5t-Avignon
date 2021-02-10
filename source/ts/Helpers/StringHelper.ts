export class StringHelper
{
    public static readonly Empty = "";


    public static IsEmpty(string: string): boolean
    {
        let output = string == StringHelper.Empty;
        return output;
    }

    public static IsNonEmpty(string: string): boolean
    {
        let output = !StringHelper.IsEmpty(string);
        return output;
    }

    public static PluralizeWithS(unit: string)
    {
        let pluralOfUnit = `${unit}s`;
        return pluralOfUnit;
    }
}