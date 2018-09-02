import { Customer } from "./customer";
import { Contact } from "./contact"
export class SourceModel {
    constructor(
        public customer?: Customer,
        public contactstodelete?: number[],
        public contactchecker?: boolean,
        public contact?: Contact) { }
}