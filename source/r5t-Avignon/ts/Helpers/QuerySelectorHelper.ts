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

    public static IsNotFoundArray(htmlElements: Element[])
    {
        let output = ArrayHelper.IsEmpty(htmlElements);
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

    public static GetHasAttributeSelector(attributeName: string)
    {
        let output = `[${attributeName}]`;
        return output;
    }

    public static GetDocumentElementByID<T extends Element>(elementIDValue: string): T
    {
        let idSelector = QuerySelectorHelper.GetIDSelector(elementIDValue);

        let output = document.querySelector(idSelector) as T;

        if(QuerySelectorHelper.IsNotFound(output))
        {
            throw new Error(`No document element by ID found. ID: '${elementIDValue}'.`);
        }

        return output;
    }

    public static GetDocumentElementsUntypedByClassName(className: string): NodeListOf<Element>
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let nodeList = document.querySelectorAll(classSelector);
        return nodeList;
    }

    public static GetDocumentElementsBySelector<T extends Element>(selector: string): T[]
    {
        let nodeList = document.querySelectorAll(selector);

        let elements = Array.from(nodeList) as T[];

        if(QuerySelectorHelper.IsNotFoundArray(elements))
        {
            throw new Error(`No document elements by selector found. Selector: '${selector}'.`);
        }

        return elements;
    }

    public static GetDocumentElementsOfTypeByClassName<T extends Element>(className: string): T[]
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let elements = QuerySelectorHelper.GetDocumentElementsBySelector<T>(classSelector);
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

    public static GetDocumentElementsByClassNameOrEmpty<T extends Element>(className: string): T[]
    {
        // TODO – overhaul this in favor of using HasDocumentElement* to check ,rather than try/catch
        let output = [];
        try {
            output = QuerySelectorHelper.GetDocumentElementsOfTypeByClassName<T>(className);
            
        } catch (Error) {
            // don't do anything, just return empty list.
        }
        return output;
    }

    public static GetChildElementBySelector<T extends Element>(parent: ParentNode, selector: string)
    {
        let element = parent.querySelector(selector) as T;

        if(QuerySelectorHelper.IsNotFound(element))
        {
            throw new Error(`No child element by selector found. Selector: ${selector}.`)
        }

        return element;
    }

    public static GetChildElementsBySelector<T extends Element>(parent: ParentNode, selector: string)
    {
        let nodeList = parent.querySelectorAll(selector);

        let elements = Array.from(nodeList) as T[];

        if(QuerySelectorHelper.IsNotFoundArray(elements))
        {
            throw new Error(`No child elements found.`);
        }

        return elements;
    }

    public static GetChildElementsOfTypeByClassName<T extends Element>(parent: ParentNode, className: string): T[]
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let elements = QuerySelectorHelper.GetChildElementsBySelector<T>(parent, classSelector);
        return elements;
    }

    /**
     * Default method for getting child elements by class name returns a typed array.
     */
    public static GetChildElementsByClassName<T extends Element>(parent: ParentNode, className: string): T[]
    {
        let output = QuerySelectorHelper.GetChildElementsOfTypeByClassName<T>(parent, className);
        return output;
    }

    public static GetChildElementByClassNameFirst<T extends Element>(parent: ParentNode, className: string): T
    {
        let selector = QuerySelectorHelper.GetClassSelector(className);

        let childElement = QuerySelectorHelper.GetChildElementBySelector<T>(parent, selector);
        return childElement;
    }

    /**
     * Ensures there is only a single child element with the class name;
     */
    public static GetChildElementByClassNameSingle<T extends Element>(parent: ParentNode, className: string): T
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
    public static GetChildElementByClassName<T extends Element>(parent: ParentNode, className: string): T
    {
        let childElement = QuerySelectorHelper.GetChildElementByClassNameSingle<T>(parent, className);
        return childElement;
    }

    public static GetDescendentElementByClassName<T extends Element>(parent: ParentNode, className: string): T
    {
        let childElement = QuerySelectorHelper.GetChildElementByClassNameSingle<T>(parent, className);
        return childElement;
    }

    public static GetChildElementByID<T extends Element>(parent: ParentNode, elementIDValue: string): T
    {
        let selector = QuerySelectorHelper.GetIDSelector(elementIDValue);

        let output = QuerySelectorHelper.GetChildElementBySelector<T>(parent, selector);
        return output;
    }

    public static HasChildElementBySelector<T extends Element>(parent: ParentNode, selector: string): boolean
    {
        let element = parent.querySelector(selector) as T;
        let hasElement = !QuerySelectorHelper.IsNotFound(element);
        return hasElement;
    }

    public static HasChildElementsBySelector<T extends Element>(parent: ParentNode, selector: string): boolean
    {
        let nodeList = parent.querySelectorAll(selector);

        let elements = Array.from(nodeList) as T[];
        let hasElements = !QuerySelectorHelper.IsNotFoundArray(elements);
        return hasElements;
    }

    public static HasChildElementsOfTypeByClassName<T extends Element>(parent: ParentNode, className: string): boolean
    {
        let classSelector = QuerySelectorHelper.GetClassSelector(className);

        let hasElements = QuerySelectorHelper.HasChildElementsBySelector<T>(parent, classSelector);
        return hasElements;
    }

    /**
     * Default method for Hasting child elements by class name returns a typed array.
     */
    public static HasChildElementsByClassName<T extends Element>(parent: ParentNode, className: string): boolean
    {
        let output = QuerySelectorHelper.HasChildElementsOfTypeByClassName<T>(parent, className);
        return output;
    }

    public static HasChildElementByClassNameFirst<T extends Element>(parent: ParentNode, className: string): boolean
    {
        let selector = QuerySelectorHelper.GetClassSelector(className);

        let childElement = QuerySelectorHelper.HasChildElementBySelector<T>(parent, selector);
        return childElement;
    }

    /**
     * Ensures there is only a single child element with the class name;
     */
    public static HasChildElementByClassNameSingle<T extends Element>(parent: ParentNode, className: string): boolean
    {
        let childElementsOfClass = QuerySelectorHelper.HasChildElementsByClassName<T>(parent, className);

        let selector = QuerySelectorHelper.GetClassSelector(className);
        let nodeList = parent.querySelectorAll(selector);

        let elements = Array.from(nodeList) as T[];

        if(ArrayHelper.MoreThanOne(elements))
        {
            throw "Query single of child elements returned more than one element.";
        }

        let hasElements = !QuerySelectorHelper.IsNotFoundArray(elements);
        return hasElements;
    }

    /**
     * Default method uses single method (meaning an error is thrown if there is more than one child element with the given class name).
     */
    public static HasChildElementByClassName<T extends Element>(parent: ParentNode, className: string): boolean
    {
        let childElement = QuerySelectorHelper.HasChildElementByClassNameSingle<T>(parent, className);
        return childElement;
    }
}