import { JavaScriptHelper } from "./JavaScriptHelper";

export class HtmlElementHelper
{
    public static Exists(htmlElement: HTMLElement): boolean
    {
        let output = JavaScriptHelper.Exists(htmlElement);
        return output;
    }

    public static RemoveAllChildren(element: HTMLElement)
    {
        while(JavaScriptHelper.Exists(element.firstChild))
        {
            element.removeChild(element.firstChild);
        }
    }
}