export class HtmlAttributeHelper
{
    public static GetAttributeValue(node: HTMLElement, attributeName: string)
    {
        let output = node.attributes.getNamedItem(attributeName).value;
        return output;
    }
}