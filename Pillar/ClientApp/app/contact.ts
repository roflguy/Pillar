﻿import { Customer } from "./customer";

export class Contact {
    constructor(
        public id?: number,
        public name?: string,
        public role?: string,
        public phone?: string,
        public mail?: string,
        public customerid?: number,
        public customer?: Customer) { }
}