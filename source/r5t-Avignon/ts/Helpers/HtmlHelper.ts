export class HtmlHelper
{
    public static StringToHtmlInDivWrapperUsingDocument(htmlText: string, document: Document): HTMLDivElement
    {
        let divElement = document.createElement("div");
        
        divElement.innerHTML = htmlText;

        return divElement;
    }

    public static StringToHtmlInDivWrapperUsingWindow(htmlText: string, window: Window): HTMLDivElement
    {
        let document = window.document;

        let divElement = HtmlHelper.StringToHtmlInDivWrapperUsingDocument(htmlText, document);
        return divElement;
    }

    /**
     * Converts an HTML text string into HTML elements, returning all elements as children of a div element.
     */
    public static StringToHtmlInDivWrapper(htmlText: string): HTMLDivElement
    {
        let divElement = HtmlHelper.StringToHtmlInDivWrapperUsingWindow(htmlText, window);
        return divElement;
    }

    /**
     * Converts an HTML text string into HTML elements, returning all elements as children of a body element.
     * This method uses DOMParser to create an independent document, and thus avoids download images and etc., until the nodes are added to the window document.
     */
    public static StringToHtmlUsingDOMParser(htmlText: string): HTMLBodyElement
    {
        let parser = new DOMParser();
        let document = parser.parseFromString(htmlText, "text/html");
        
        return document.body as HTMLBodyElement;
    }

    public static StringToDocumentUsingDOMParser(htmlText: string): Document
    {
        let parser = new DOMParser();
        let document = parser.parseFromString(htmlText, "text/html");
        return document;
    }

    /**
     * Uses StringToDocumentUsingDOMParser() as the default.
     */
    public static StringToDocument(htmlText: string): Document
    {
        let document = HtmlHelper.StringToDocumentUsingDOMParser(htmlText);
        return document;
    }

    /**
     * Converts an HTML text string into HTML elements, returning all elements as children of a body element.
     * This method uses a DOMParser.
     */
    public static StringToHtmlInBodyWrapper(htmlText: string): HTMLBodyElement
    {
        let bodyElement = HtmlHelper.StringToHtmlUsingDOMParser(htmlText);
        return bodyElement;
    }

    /**
     * Converts an HTML text string into a single HTML element, assuming the single element of interest is the first child of a wrapper element for deserialization.
     * This method uses a DOMParser.
     */
    public static StringToHtmlSingleFirstChild<T extends HTMLElement>(htmlText: string): T
    {
        let firstChild = HtmlHelper.StringToHtmlInBodyWrapper(htmlText).firstChild as T;
        return firstChild;
    }

    /**
     * Converts an HTML text string into an HTML element.
     * This method uses a DOMParser, and assumes the element of interest is the first child of a wrapper element for deserialization.
     */
    public static StringToHtml<T extends HTMLElement>(htmlText: string): T
    {
        let element = HtmlHelper.StringToHtmlSingleFirstChild<T>(htmlText);
        return element;
    }
}