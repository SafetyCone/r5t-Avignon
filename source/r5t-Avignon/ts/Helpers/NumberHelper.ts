import { StringHelper } from "./StringHelper";

export class NumberHelper
{
    public static readonly DecimalRadix = 10;


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

    /**
     * Formats a number as a two-digit string (example, 8 as "08").
     */
    public static ToStringDD(number: number): string
    {
        let output = number.toString().padStart(2, "0");
        return output;
    }

    /**
     * Simply returns the number with the units.
     */
    public static ToStringWithUnitsSimple(number: number, units: string)
    {
        let singleOutput = `${number} ${units}`;
        return singleOutput;
    }

    public static ToStringWithUnitsSpecifyPlural(number: number, unitSingular: string, unitsPlural: string)
    {
        if(number == 1)
        {
            let singleOutput = NumberHelper.ToStringWithUnitsSimple(number, unitSingular);
            return singleOutput;
        }
        else
        {
            let pluralOutput = NumberHelper.ToStringWithUnitsSimple(number, unitsPlural);
            return pluralOutput;
        }
    }

    public static ToStringWithUnitsPluralizedWithS(number: number, unitSingular: string)
    {
        if(number == 1)
        {
            let singleOutput = NumberHelper.ToStringWithUnitsSimple(number, unitSingular);
            return singleOutput;
        }
        else
        {
            let unitsPlural = StringHelper.PluralizeWithS(unitSingular);

            let pluralOutput = NumberHelper.ToStringWithUnitsSimple(number, unitsPlural);
            return pluralOutput;
        }
    }

    public static ChooseUnits(number: number, unitsSingular: string, unitsPlural: string)
    {
        if(number == 1)
        {
            return unitsSingular;
        }
        else
        {
            return unitsPlural;
        }
    }

    /**
     * Chooses the units-pluralized-with-S method as the default.
     */
    public static ToStringWithUnits(number: number, unitSingular: string)
    {
        let output = NumberHelper.ToStringWithUnitsPluralizedWithS(number, unitSingular);
        return output;
    }

    public static IntegerFromString(integerAsString: string)
    {
        let output = NumberHelper.ParseInteger(integerAsString);
        return output;
    }

    public static FloatFromString(floatAsString: string)
    {
        let output = NumberHelper.ParseFloat(floatAsString);
        return output;
    }
    
    /**
     * The JavaScript parseInt() function does not work the way it should, in that it -requires- specifying a radix of 10 to get an actual useful integer.
     * This function fixes this.
     */
    public static ParseIntegerNoError(value: string)
    {
        let output = parseInt(value, NumberHelper.DecimalRadix);
        return output;
    }

    public static TryParseInteger(value: string)
    {
        let output = this.ParseIntegerNoError(value);
        
        let success = !NumberHelper.IsNAN(output);

        return {
            Success: success,
            Value: output,
        };
    }

    public static GetParseIntegerErrorMessage(value: string)
    {
        let message = `Unable to parse value '${value}' to an integer.`;
        return message;
    }

    public static GetParseFloatErrorMessage(value: string)
    {
        let message = `Unable to parse value '${value}' to a float.`;
        return message;
    }

    /**
     * The JavaScript parseInt() function does not work the way it should, in that it -requires- specifying a radix of 10 to get an actual useful integer.
     * The parseInt() function also does not error if the input string is unrecognized as a number.
     * This function fixes those downsides.
     */
    public static ParseInteger(value: string)
    {
        let result = NumberHelper.TryParseInteger(value);
        if(!result.Success)
        {
            let message = NumberHelper.GetParseIntegerErrorMessage(value);
            throw new Error(message);
        }

        return result.Value;
    }

    /**
     * Unlile the JavaScript parseFloat() function, parseFloat() works as expected.
     * However, this method is named similarly to ParseIntegerNoError() for ease of use.
     */
    public static ParseFloatNoError(value: string)
    {
        let output = parseFloat(value);
        return output;
    }

    public static TryParseFloat(value: string)
    {
        let output = this.ParseFloatNoError(value);
        
        let success = !NumberHelper.IsNAN(output);

        return {
            Success: success,
            Value: output,
        };
    }

    /**
     * Unlike the JavaScript parseFloat() function, parseFloat() works as expected in terms of string conversion to floats.
     * However parseFloat() function does not error if the input string is unrecognized as a number.
     * This function fixes this.
     */
    public static ParseFloat(value: string)
    {
        let result = NumberHelper.TryParseFloat(value);
        if(!result.Success)
        {
            let message = NumberHelper.GetParseFloatErrorMessage(value);
            throw new Error(message);
        }

        return result.Value;
    }
}