export class HtmlImageHelper
{
    public static SetImageSourceFromFile(image: HTMLImageElement, imageFile: File): Promise<void>
    {
        let promise = new Promise<void>((resolve) =>
        {
            let fileReader = new FileReader();
            fileReader.onload = () =>
            {
                image.src = fileReader.result.toString();

                resolve();
            };

            fileReader.readAsDataURL(imageFile);
        });

        return promise;
    }
}