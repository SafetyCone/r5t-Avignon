import { JavaScriptHelper } from "./JavaScriptHelper";
import { StringHelper } from "./StringHelper";

export class HtmlElementHelper
{
    public static SelectFirstChild(htmlElement: HTMLElement)
    {
        let firstChild = htmlElement.firstElementChild;
        return firstChild;
    }

    public static SelectFirstChildAs<T extends HTMLElement>(htmlElement: HTMLElement)
    {
        let firstChild = HtmlElementHelper.SelectFirstChild(htmlElement) as T;
        return firstChild;
    }

    public static SelectNextSibling(htmlElement: HTMLElement)
    {
        let nextSibling = htmlElement.nextElementSibling;
        return nextSibling;
    }

    public static SelectNextSiblingAs<T extends HTMLElement>(htmlElement: HTMLElement)
    {
        let nextSibling = HtmlElementHelper.SelectNextSibling(htmlElement) as T;
        return nextSibling;
    }

    public static SelectParent(htmlElement: HTMLElement)
    {
        let parent = htmlElement.parentElement;
        return parent;
    }

    public static SelectParentAs<T extends HTMLElement>(htmlElement: HTMLElement)
    {
        let parent = HtmlElementHelper.SelectParent(htmlElement) as T;
        return parent;
    }

    public static SelectParentOfParent(htmlElement: HTMLElement)
    {
        let parent = htmlElement.parentElement.parentElement;
        return parent;
    }

    public static SelectParentOfParentAs<T extends HTMLElement>(htmlElement: HTMLElement)
    {
        let parent = HtmlElementHelper.SelectParentOfParent(htmlElement) as T;
        return parent;
    }

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

    public static AddCssClasses(element: HTMLElement, cssClasses: string[])
    {
        element.classList.add(...cssClasses);
    }

    public static AddCssClassesString(element: HTMLElement, cssClassesString: string)
    {
        let cssClasses = cssClassesString.split(StringHelper.Space);

        HtmlElementHelper.AddCssClasses(element, cssClasses);
    }

    public static RemoveCssClasses(element: HTMLElement, cssClasses: string[])
    {
        element.classList.remove(...cssClasses);
    }

    public static RemoveCssClassesString(element: HTMLElement, cssClassesString: string)
    {
        let cssClasses = cssClassesString.split(StringHelper.Space);

        HtmlElementHelper.RemoveCssClasses(element, cssClasses);
    }

    public static ClearContent(element: HTMLElement)
    {
        element.innerHTML = "";
    }

    public static GetContent(element: HTMLElement): string
    {
        let output = element.innerHTML;
        return output;
    }

    public static SetContent(element: HTMLElement, content: string)
    {
        element.innerHTML = content;
    }
    
    public static SetValueForSpan(span: HTMLSpanElement, value: string)
    {
        span.innerText = value;
    }

    public static SetValueForParagraph(paragraph: HTMLParagraphElement, value: string)
    {
        paragraph.innerText = value;
    }
}