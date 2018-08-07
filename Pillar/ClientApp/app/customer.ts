import { Contact } from "./contact";

export class Customer {
    constructor(
        public id?: number,
        public name?: string,
        public address?: string,
        public email?: string,
        public phone?: string,
        public comments?: string,
        public contacts?: Contact[]) { }
}