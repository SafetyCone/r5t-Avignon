export class ArrayExtensions
{
    /**
     * Clears an array instance (as opposed to just replacing the array with a new empty array).
     */
    public static Clear<T>(array: Array<T>): void
    {
        // Adapted from method 2 here: https://stackoverflow.com/a/1232046.
        array.length = 0;
    }
}