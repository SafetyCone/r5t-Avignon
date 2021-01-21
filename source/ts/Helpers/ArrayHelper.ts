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

    public static WasFound(index: number)
    {
        let wasFound = index > ArrayHelper.IndexNotFound;
        return wasFound;
    }
}