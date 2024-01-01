import { OptionsMessageError } from "../interfaces/OptionsMessageError";

export class ValidationsMessageError{
    optionsMenssageError: OptionsMessageError;

    constructor(options: OptionsMessageError) {
        this.optionsMenssageError = options;
    }

}