import { Strings } from "../Classes/Strings";

export class HtmlAttributeHelper
{
    public static GetAttributeValue(node: Element, attributeName: string)
    {
        let output = node.attributes.getNamedItem(attributeName).value;
        return output;
    }

    public static HasAttributeValue(node: Element, attributeName: string)
    {
        let output = node.hasAttribute(attributeName);
        return output;
    }

    public static RemoveAttribute(node: Element, attributeName: string)
    {
        node.removeAttribute(attributeName);
    }

    public static SetValuelessAttribute(node: Element, attributeName: string)
    {
        node.setAttribute(attributeName, Strings.Empty);
    }
}