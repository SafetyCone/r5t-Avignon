export class DictionaryHelper
{
    public static ContainsKey(dictionary: Object, key: string)
    {
        let containsKey = key in dictionary;
        return containsKey;
    }
}