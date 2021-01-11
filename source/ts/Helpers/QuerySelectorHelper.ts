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
}