import { ValidationResult } from "../Classes/ValidationResult"

export type Validator<T> = (value: T) => Promise<ValidationResult>
export type ObjectValidator = Validator<any>;
export type StringValidator = Validator<string>;
export type NumberValidator = Validator<number>;

export type SynchronousValidator<T> = (value: T) => ValidationResult;