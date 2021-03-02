import { StringHelper } from "../Helpers/StringHelper";
import { AnchorWrapper } from "../Wrappers/AnchorWrapper";

export class AnchorWrapperExtensions
{
    public static ResetToEmpty(anchor: AnchorWrapper)
    {
        anchor.HyperlinkReference = StringHelper.Empty;
        anchor.Content = StringHelper.Empty;
    }
}