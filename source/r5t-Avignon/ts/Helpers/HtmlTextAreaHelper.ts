import { Strings } from "../Classes/Strings";
import { IHas } from "../Interfaces/IHas";

export class HtmlTextAreaHelper
{
    /**
     * Empty textareas have the empty string as their value.
     */
    public static readonly EmptyValue = Strings.Empty;


    public static IsEmptyValue(string: string)
    {
        let output = string == HtmlTextAreaHelper.EmptyValue;
        return output;
    }

    public static IsNonEmptyValue(string: string)
    {
        let isEmptyValue = HtmlTextAreaHelper.IsEmptyValue(string);

        let output = !isEmptyValue;
        return output;
    }

    public static IsEmpty(textArea: HTMLTextAreaElement)
    {
        let value = HtmlTextAreaHelper.GetValue(textArea);

        let output = HtmlTextAreaHelper.IsEmptyValue(value);
        return output;
    }

    public static HasValue(textArea: HTMLTextAreaElement)
    {
        let isEmpty = HtmlTextAreaHelper.IsEmpty(textArea);

        let hasValue = !isEmpty;
        return hasValue;
    }

    public static HasValueGetValue(textArea: HTMLTextAreaElement)
    {
        let hasValue = HtmlTextAreaHelper.HasValue(textArea);
        let value = HtmlTextAreaHelper.GetValue(textArea);

        let output: IHas<string> =
        {
            HasValue: hasValue,
            Value: value
        };
        return output;
    }

    public static GetValue(textArea: HTMLTextAreaElement)
    {
        // Simple, yes.
        let value = textArea.value;
        return value;
    }
}