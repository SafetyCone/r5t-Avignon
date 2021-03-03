export class EmailAddressHelper
{
    public static IsEmailAddress(value: string)
    {
        // From: https://www.w3resource.com/javascript/form/email-validation.php
        let isEmailAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        return isEmailAddress;
    }

    public static GetNotValidEmailAddressMessage(value: string)
    {
        let message = `The value '${value}' is not a valid email address.`;
        return message;
    }
}