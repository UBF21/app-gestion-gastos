import { Injectable } from "@angular/core";
import { ItemBuilderValidationMessageError } from "../interfaces/ItemBuilderValidationMessageError";
import { ValidationsMessageError } from "./ValidationsMessageError";
import { OptionsMessageError } from "../interfaces/OptionsMessageError";

@Injectable({
    providedIn: 'any',
  })
export class BuilderValidationMessageError{
    private validationsMessages: ItemBuilderValidationMessageError = { itemsValidationMessageError: {} };


    public addValidationMessage(field: string, options: OptionsMessageError): void {
        this.validationsMessages.itemsValidationMessageError[field] = new ValidationsMessageError(options);
    }

    public get getValidationsMessage(){
        return this.validationsMessages;
    }

}