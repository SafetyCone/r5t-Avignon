export class JsonHelper
{
    public static Parse<T>(jsonString: string)
    {
        let output = JSON.parse(jsonString) as T;
        return output;
    }

    public static TryParseAny(possiblyJson: string)
    {
        let result: any;
        let success = true;
        try
        {
            result = JSON.parse(possiblyJson);
        }
        catch (e)
        {
            success = false;
        }

        let output = {
            success: success,
            result: result,
        };
        return output;
    }

    public static TryParse<T>(possibleJson: string)
    {
        let tryParseResult = JsonHelper.TryParseAny(possibleJson);

        let resultAsT = tryParseResult.result as T;

        let output = {
            success: tryParseResult.success,
            result: resultAsT,
        };
        return output;
    }
}