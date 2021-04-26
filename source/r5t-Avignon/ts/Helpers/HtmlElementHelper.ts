import { CssClassList } from "../Classes/CssClassList";
import { HtmlAttributeHelper } from "./HtmlAttributeHelper";
import { JavaScriptHelper } from "./JavaScriptHelper";

export class HtmlElementHelper
{
    public static AddDisabledAttribute(element: Element)
    {
        HtmlAttributeHelper.SetValuelessAttribute(element, "disabled");
    }

    public static RemoveDisabledAttribute(element: Element)
    {
        HtmlAttributeHelper.RemoveAttribute(element, "disabled");
    }

    public static SelectFirstChild(htmlElement: ParentNode)
    {
        let firstChild = htmlElement.firstElementChild;
        return firstChild;
    }

    public static SelectFirstChildAs<T extends Element>(parentElement: ParentNode)
    {
        let firstChild = HtmlElementHelper.SelectFirstChild(parentElement) as T;
        return firstChild;
    }

    public static SelectNextSibling(element: Element)
    {
        let nextSibling = element.nextElementSibling;
        return nextSibling;
    }

    public static SelectNextSiblingAs<T extends Element>(element: Element)
    {
        let nextSibling = HtmlElementHelper.SelectNextSibling(element) as T;
        return nextSibling;
    }

    public static SelectParent(childElement: ChildNode): HTMLElement // HTMLElement since that's what parentElement is.
    {
        let parent = childElement.parentElement;
        return parent;
    }

    public static SelectParentAs<T extends HTMLElement>(childElement: ChildNode)
    {
        let parent = HtmlElementHelper.SelectParent(childElement) as T;
        return parent;
    }

    public static SelectParentOfParent(childElement: ChildNode): HTMLElement // HTMLElement since that's what parentElement is.
    {
        let parent = childElement.parentElement.parentElement;
        return parent;
    }

    public static SelectParentOfParentAs<T extends HTMLElement>(childElement: ChildNode)
    {
        let parent = HtmlElementHelper.SelectParentOfParent(childElement) as T;
        return parent;
    }

    public static Exists(htmlElement: Element): boolean
    {
        let output = JavaScriptHelper.Exists(htmlElement);
        return output;
    }

    public static RemoveAllChildren(element: Element)
    {
        while(JavaScriptHelper.Exists(element.firstChild))
        {
            element.removeChild(element.firstChild);
        }
    }

    public static HasClass(element: Element, className: string)
    {
        let output = element.classList.contains(className);
        return output;
    }

    public static AddCssClass(element: Element, addClass: string)
    {
        element.classList.add(addClass);
    }

    public static RemoveCssClass(element: Element, removeClass: string)
    {
        element.classList.remove(removeClass);
    }

    public static AddAndRemoveCssClass(element: Element, addClass: string, removeClass: string)
    {
        // Add takes precedence over remove (in case the same class is in both lists).
        HtmlElementHelper.RemoveCssClass(element, removeClass);
        HtmlElementHelper.AddCssClass(element, addClass);
    }

    public static AddCssClasses(element: Element, cssClasses: string[])
    {
        element.classList.add(...cssClasses);
    }

    public static RemoveCssClasses(element: Element, cssClasses: string[])
    {
        element.classList.remove(...cssClasses);
    }

    public static AddAndRemoveCssClasses(element: Element, addCssClasses: string[], removeCssClasses: string[])
    {
        // Add takes precedence over remove (in case the same class is in both lists).
        HtmlElementHelper.RemoveCssClasses(element, removeCssClasses);
        HtmlElementHelper.AddCssClasses(element, addCssClasses);
    }

    public static AddCssClassesString(element: Element, cssClassesString: string)
    {
        let cssClasses = CssClassList.ClassesFrom(cssClassesString);

        HtmlElementHelper.AddCssClasses(element, cssClasses);
    }

    public static RemoveCssClassesString(element: Element, cssClassesString: string)
    {
        let cssClasses = CssClassList.ClassesFrom(cssClassesString);

        HtmlElementHelper.RemoveCssClasses(element, cssClasses);
    }

    public static AddAndRemoveCssClassesString(element: Element, addCssClassesString: string, removeCssClassesString: string)
    {
        // Add takes precedence over remove (in case the same class is in both lists).
        HtmlElementHelper.RemoveCssClassesString(element, removeCssClassesString);
        HtmlElementHelper.AddCssClassesString(element, addCssClassesString);
    }

    public static ClearContent(element: Element)
    {
        element.innerHTML = "";
    }

    public static GetContent(element: Element): string
    {
        let output = element.innerHTML;
        return output;
    }

    public static SetContent(element: Element, content: string)
    {
        element.innerHTML = content;
    }
    
    public static SetValueForSpan(span: HTMLSpanElement, value: string)
    {
        span.innerText = value;
    }

    public static GetValueForParagraph(paragraph: HTMLParagraphElement)
    {
        let output = paragraph.innerText;
        return output;
    }

    public static SetValueForParagraph(paragraph: HTMLParagraphElement, value: string)
    {
        paragraph.innerText = value;
    }
}