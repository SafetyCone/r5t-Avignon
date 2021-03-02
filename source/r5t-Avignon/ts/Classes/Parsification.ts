import { NumberHelper } from "../Helpers/NumberHelper";

export class Parsification
{
    /**
     * Dummy op.
     */
    public static ToString(string: string)
    {
        return string;
    }

    public static ToInteger(string: string): number
    {
        let output = NumberHelper.ParseInteger(string);
        return output;
    }

    public static ToFloat(string: string): number
    {
        let output = NumberHelper.ParseFloat(string);
        return output;
    }

    public static ToNumber(string: string): number
    {
        let output = Parsification.ToFloat(string);
        return output;
    }
}