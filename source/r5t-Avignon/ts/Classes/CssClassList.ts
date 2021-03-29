import { Strings } from "./Strings";

export class CssClassList
{
    public static ClassesFrom(cssClassesString: string)
    {
        let cssClasses = cssClassesString.split(Strings.Space);
        return cssClasses;
    }

    public static ClassesFromSingle(cssClass: string)
    {
        // Works just fine for single strings.
        let cssClasses = CssClassList.ClassesFrom(cssClass);
        return cssClasses;
    }
}