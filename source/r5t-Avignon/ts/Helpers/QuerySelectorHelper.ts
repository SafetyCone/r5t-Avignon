import { ArrayHelper } from "./ArrayHelper";

export class QuerySelectorHelper
{
    public static readonly ClassSelectorPrefix = ".";
    public static readonly IDSelectorPrefix = "#";
    public static readonly NotFound = null;


    public static IsNotFound(htmlElement: Element)
    {
        let output = htmlElement == QuerySelectorHelper.NotFound;
        return output;
    }

    public static WasFound(htmlElement: Element)
    {
        let output = htmlElement != QuerySelectorHelper.NotFound;
        return output;
    }

    /**
     * Returns the ID selector ("#first-element") for an element ID value ("first-element").
     * @param elementIDValue The value of the element ID (i.e. "first-element" in the ID selector "#first-element").
     */
    public static GetIDSelector(elementIDValue: string)
    {
        let output = QuerySelectorHelper.IDSelectorPrefix + elementIDValue;
        return output;
    }

    /**
     * Retuns the class selector (".button-large") for a class name ("button-large").
     * @param className The name of the selector class (i.e. "button-large" in the class selector ".button-large").
     */
    public static GetClassSelector(className: string)
    {
        let output = QuerySelectorHelper.ClassSelectorPrefix + className;
        return output;
    }

    public static GetDocumentElementByID<T extends Element>(elementIDValue: string): T
    {
        let idSelector = QuerySelectorHelper.GetIDSelector(elementIDValue);

        let output = document.querySelector(idSelector) as T;
        return output;
    }

    public static GetDocumentElementsUntypedByClassName(className: string): NodeListOf<Element>
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let nodeList = document.querySelectorAll(classSelector);
        return nodeList;
    }

    public static GetDocumentElementsOfTypeByClassName<T extends Element>(className: string): T[]
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let nodeList = document.querySelectorAll(classSelector);

        let elements = Array.from(nodeList) as T[];
        return elements;
    }

    /**
     * Default method for getting document elements by class name returns a typed array.
     */
    public static GetDocumentElementsByClassName<T extends Element>(className: string): T[]
    {
        let output = QuerySelectorHelper.GetDocumentElementsOfTypeByClassName<T>(className);
        return output;
    }

    public static GetChildElementBySelector<T extends Element>(parent: ParentNode, selector: string)
    {
        let element = parent.querySelector(selector) as T;
        return element;
    }

    public static GetChildElementsOfTypeByClassName<T extends Element>(parent: Element, className: string): T[]
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let nodeList = parent.querySelectorAll(classSelector);

        let elements = Array.from(nodeList) as T[];
        return elements;
    }

    /**
     * Default method for getting child elements by class name returns a typed array.
     */
    public static GetChildElementsByClassName<T extends Element>(parent: Element, className: string): T[]
    {
        let output = QuerySelectorHelper.GetChildElementsOfTypeByClassName<T>(parent, className);
        return output;
    }

    public static GetChildElementByClassNameFirst<T extends Element>(parent: Element, className: string): T
    {
        let selector = QuerySelectorHelper.GetClassSelector(className);

        let childElement = QuerySelectorHelper.GetChildElementBySelector<T>(parent, selector);
        return childElement;
    }

    /**
     * Ensures there is only a single child element with the class name;
     */
    public static GetChildElementByClassNameSingle<T extends Element>(parent: Element, className: string): T
    {
        let childElementsOfClass = QuerySelectorHelper.GetChildElementsByClassName<T>(parent, className);

        if(ArrayHelper.MoreThanOne(childElementsOfClass))
        {
            throw "Query single of child elements returned more than one element.";
        }

        let childElement = ArrayHelper.First(childElementsOfClass);
        return childElement;
    }

    /**
     * Default method uses single method (meaning an error is thrown if there is more than one child element with the given class name).
     */
    public static GetChildElementByClassName<T extends Element>(parent: Element, className: string): T
    {
        let childElement = QuerySelectorHelper.GetChildElementByClassNameSingle<T>(parent, className);
        return childElement;
    }

    public static GetDescendentElementByClassName<T extends Element>(parent: Element, className: string): T
    {
        let childElement = QuerySelectorHelper.GetChildElementByClassNameSingle<T>(parent, className);
        return childElement;
    }

    public static GetChildElementByID<T extends Element>(parent: Element, elementIDValue: string): T
    {
        let idSelector = QuerySelectorHelper.GetIDSelector(elementIDValue);

        let output = parent.querySelector(idSelector) as T;
        return output;
    }
}