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
    
    public get Content(): string
    {
        return this.Anchor.innerHTML;
    }
    public set Content(value: string)
    {
        this.Anchor.innerHTML = value;
    }


    constructor(
        public readonly Anchor: HTMLAnchorElement)
    {
    }
}