export class ArrayHelper
{
    public static readonly IndexNotFound = -1;


    public static WasFound(index: number)
    {
        let wasFound = index > ArrayHelper.IndexNotFound;
        return wasFound;
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
}