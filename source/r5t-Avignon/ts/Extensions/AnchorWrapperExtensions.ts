import { Strings } from "../Classes/Strings";
import { AnchorWrapper } from "../Wrappers/AnchorWrapper";

export class AnchorWrapperExtensions
{
    public static ResetToEmpty(anchor: AnchorWrapper)
    {
        anchor.HyperlinkReference = Strings.Empty;
        anchor.Content = Strings.Empty;
    }
}