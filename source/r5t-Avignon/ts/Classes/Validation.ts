import { EmailAddressHelper } from "../Helpers/EmailAddressHelper";
import { NumberHelper } from "../Helpers/NumberHelper";
import { PromiseHelper } from "../Helpers/PromiseHelper";
import { StringHelper } from "../Helpers/StringHelper";
import { ValidationResult } from "./ValidationResult";

// Note, methods are asynchronous to support the Validator type.
export class Validation
{
    public static IsInteger(string: string): Promise<ValidationResult>
    {
        let parseResult = NumberHelper.TryParseInteger(string);

        let message = parseResult.Success
            ? StringHelper.Empty
            : NumberHelper.GetParseIntegerErrorMessage(string);
        
        let validationResult = new ValidationResult(parseResult.Success, message);
        return PromiseHelper.FromValue(validationResult);
    }

    public static IsFloat(string: string): Promise<ValidationResult>
    {
        let parseResult = NumberHelper.TryParseFloat(string);

        let message = parseResult.Success
            ? StringHelper.Empty
            : NumberHelper.GetParseFloatErrorMessage(string);
        
        let validationResult = new ValidationResult(parseResult.Success, message);
        return PromiseHelper.FromValue(validationResult);
    }

    public static IsNumber(string: string): Promise<ValidationResult>
    {
        let output = Validation.IsFloat(string);
        return output;
    }

    public static IsEmailAddress(string: string): Promise<ValidationResult>
    {
        let isEmailAddress = EmailAddressHelper.IsEmailAddress(string);

        let message = isEmailAddress
            ? StringHelper.Empty
            : EmailAddressHelper.GetNotValidEmailAddressMessage(string);

        let result = new ValidationResult(isEmailAddress, message)
        return PromiseHelper.FromValue(result);
    }
}