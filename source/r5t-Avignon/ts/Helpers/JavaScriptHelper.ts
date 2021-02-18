export class JavaScriptHelper
{
    /**
     * Determines if the type of the input is 'undefined' or if the input is null.
     */
    public static NotExists(value: any): boolean
    {
        // From: https://stackoverflow.com/a/6509422
        let output = (typeof value === 'undefined' || value === null);
        return output;
    }

    /**
     * Determines if the type of the input is 'undefined' or if the input is null.
     */
    public static Exists(value: any): boolean
    {
        let output = !JavaScriptHelper.NotExists(value);
        return output;
    }

    /**
     * Determines whether the type of the input is 'undefined'.
     */
    public static IsUndefined(value: any): boolean
    {
        let output = (typeof value === 'undefined');
        return output;
    }

    /**
     * Determines whether the type of the input is 'undefined'.
     */
    public static IsDefined(value: any): boolean
    {
        let output = !JavaScriptHelper.IsUndefined(value);
        return output;
    }

    public static IsNull(value: any): boolean
    {
        let output = (value === null);
        return output;
    }

    public static IsNonNull(value: any): boolean
    {
        let output = !JavaScriptHelper.IsNull(value);
        return output;
    }

    /**
     * Returns the boolean of if(value). This includes:
     * 1) false if the value is undefined,
     * 2) false if the value is null,
     * 3) false if the value is the empty string,
     * 4) false if the value is zero,
     * 5) false if the value is NaN,
     * 6) false if the value is false.
     */
    public static IfBehavior(value: any): boolean
    {
        if(value)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}