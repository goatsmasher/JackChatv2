import _ from "lodash";
import {Validator} from "../validator";

export let MESSAGE_TYPES = ["normal"];

export function validateSendMessage(user, message, type) {
    const validator = new Validator();

    if (message.length > 50) {
        validator.error("Message must be smaller 50 characters");
    } 
    if (!_.includes(MESSAGE_TYPES, type)){
        validator.error(`Invalid message type: ${type}`);
    }
    if (message.trim().length === 0 ){
        validator.error("Message cannot be blank");
    }

    return validator;
}