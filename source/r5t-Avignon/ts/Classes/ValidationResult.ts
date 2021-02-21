import { StringHelper } from "../Helpers/StringHelper";

export class ValidationResult
{
    public static From(isValid: boolean, message: string = StringHelper.Empty)
    {
        let validationResult = new ValidationResult(isValid, message);
        return validationResult;
    }


    constructor(
        public readonly IsValid: boolean,
        public readonly Message: string)
    {
    }
}