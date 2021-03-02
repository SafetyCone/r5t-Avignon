export class AnchorWrapper
{
    public get HyperlinkReference(): string
    {
        return this.Anchor.href;
    }
    public set HyperlinkReference(value: string)
    {
        this.Anchor.href = value;
    }

    public get ContentText(): string
    {
        return this.Anchor.innerText;
    }
    public set ContentText(value: string)
    {
        this.Anchor.innerText = value;
    }

    public get ContentHtml(): string
    {
        return this.Anchor.innerHTML;
    }
    public set ContentHtml(value: string)
    {
        this.Anchor.innerHTML = value;
    }
    
    /**
     * Defaults to text content.
     */
    public get Content(): string
    {
        return this.ContentText;
    }
    public set Content(value: string)
    {
        this.ContentText = value;
    }


    constructor(
        public readonly Anchor: HTMLAnchorElement)
    {
        
    }
}