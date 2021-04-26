import { Strings } from "../Classes/Strings";

export class HtmlAttributeHelper
{
    public static GetAttributeValue(element: Element, attributeName: string)
    {
        let output = element.attributes.getNamedItem(attributeName).value;
        return output;
    }

    public static GetAttributeValueOrDefault(element: Element, attributeName: string, defaultValue = Strings.Empty)
    {
        let hasAttributeValue = HtmlAttributeHelper.HasAttributeValue(element, attributeName);
        
        let output = hasAttributeValue
            ? HtmlAttributeHelper.GetAttributeValue(element, attributeName)
            : defaultValue;
        return output;  
    }

    public static HasAttributeValue(element: Element, attributeName: string)
    {
        let output = element.hasAttribute(attributeName);
        return output;
    }

    public static RemoveAttribute(element: Element, attributeName: string)
    {
        element.removeAttribute(attributeName);
        
    }

    public static SetValuelessAttribute(element: Element, attributeName: string)
    {
        element.setAttribute(attributeName, Strings.Empty);
    }
}