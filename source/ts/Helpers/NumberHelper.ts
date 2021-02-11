import { StringHelper } from "./StringHelper";

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
        let output = parseInt(integerAsString);
        return output;
    }

    public static FloatFromString(floatAsString: string)
    {
        let output = parseFloat(floatAsString);
        return output;
    }
}