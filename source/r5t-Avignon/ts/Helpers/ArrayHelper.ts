export class ArrayHelper
{
    public static readonly IndexNotFound = -1;


    public static Any<T>(array: Array<T>): boolean
    {
        let anyElements = array.length > 0;
        return anyElements;
    }

    public static First<T>(array: Array<T>): T
    {
        let first = array[0];
        return first;
    }

    public static IsEmpty<T>(array: Array<T>): boolean
    {
        let any = ArrayHelper.Any(array);

        let isEmpty = !any;
        return isEmpty;
    }

    public static MoreThanOne<T>(array: Array<T>): boolean
    {
        let moreThanOne = array.length > 1;
        return moreThanOne;
    }

    public static None<T>(array: Array<T>): boolean
    {
        let none = array.length < 1;
        return none;
    }

    public static RemoveFirstValue<T>(array: Array<T>, value: T)
    {
        let index = array.indexOf(value);
        if(ArrayHelper.WasFound(index))
        {
            array.splice(index, 1);
        }
    }

    public static RemoveValue<T>(array: Array<T>, value: T)
    {
        ArrayHelper.RemoveFirstValue(array, value);
    }

    /**
     * Creates a new, sorted array without modifying the original array.
     * This is as opposed to sorting the array in place (which is the JavaScript default behavior).
     */
    public static SortNew<T>(array: Array<T>, comparer?: (a: T, b: T) => number): Array<T>
    {
        let newArray = [...array];

        ArrayHelper.SortInPlace(newArray, comparer);

        return newArray;
    }

    /**
     * Sorts the elements of the input array.
     * Uses the JavaScript default behavior of sorting in place.
     */
    public static SortInPlace<T>(array: Array<T>, comparer?: (a: T, b: T) => number): void
    {
        array.sort(comparer);
    }

    /**
     * Selects sort-new as the default sort operation.
     * (Note: this is different from JavaScript, in which the .sort() method sorts in place.)
     */
    public static Sort<T>(array: Array<T>, comparer?: (a: T, b: T) => number): Array<T>
    {
        let output = ArrayHelper.SortNew(array, comparer);
        return output;
    }

    public static WasFound(index: number)
    {
        let wasFound = index > ArrayHelper.IndexNotFound;
        return wasFound;
    }
}