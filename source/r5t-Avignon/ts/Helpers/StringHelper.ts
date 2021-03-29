import { Strings } from "../Classes/Strings";
import { JavaScriptHelper } from "./JavaScriptHelper";
import { NumberHelper } from "./NumberHelper";

export class StringHelper
{
    public static IsEmpty(string: string): boolean
    {
        let output = string == Strings.Empty;
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

    public static ToInteger(value: string)
    {
        let output = NumberHelper.IntegerFromString(value);
        return output;
    }

    public static ToFloat(value: string)
    {
        let output = NumberHelper.FloatFromString(value);
        return output;
    }

    public static EmptyIfUndefined(value: string)
    {
        if(JavaScriptHelper.IsUndefined(value))
        {
            return Strings.Empty;
        }

        return value;
    }

    public static IsDefinedNonNullNonEmpty(value: string)
    {
        let output = JavaScriptHelper.IsDefined(value) && JavaScriptHelper.IsNonNull(value) && StringHelper.IsNonEmpty(value);
        return output;
    }

    public static HasValue(value: string)
    {
        let output = StringHelper.IsDefinedNonNullNonEmpty(value);
        return output;
    }
}