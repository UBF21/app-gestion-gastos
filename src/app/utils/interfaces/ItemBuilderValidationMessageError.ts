import { ValidationsMessageError } from "../models/ValidationsMessageError";

export interface ItemBuilderValidationMessageError{
    itemsValidationMessageError: { [key: string]: ValidationsMessageError };
}