import { Strings } from "./Strings";

export class ValidationResult
{
    public static From(isValid: boolean, message: string = Strings.Empty)
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