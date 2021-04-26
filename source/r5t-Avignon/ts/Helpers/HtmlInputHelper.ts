export class HtmlInputHelper
{
    public static GetFirstFile(inputElement: HTMLInputElement)
    {
        let output = inputElement.files[0];
        return output;
    }

    public static HasFile(inputElement: HTMLInputElement)
    {
        let output = inputElement.files.length > 0;
        return output;
    }
}