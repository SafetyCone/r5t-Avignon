export class NumberHelper
{
    public static IsZero(number: number): boolean
    {
        let output = number == 0;
        return output;
    }

    public static IsNonZero(number: number): boolean
    {
        let output = !NumberHelper.IsZero(number);
        return output;
    }

    public static IsNAN(number: number): boolean
    {
        let output = number == NaN;
        return output;
    }

    public static IsNonNAN(number: number): boolean
    {
        let output = !NumberHelper.IsNAN(number);
        return output;
    }
}