import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Contact } from './contact';
import { SourceModel } from './sourcemodel';

@Injectable()
export class DataService {
    private url = "/api/customers";
    private urlc = "/api/customers/api/contacts";
    private urlnew = "/api/customers/api/edit"
    constructor(private http: HttpClient) {
    }

    editCustomer(source: SourceModel) {
        return this.http.post(this.urlnew, source);
    }



    getCustomers() {
        return this.http.get(this.url);
    }

    createContact(contact: Contact) {

        return this.http.post(this.urlc, contact);
    }

    createCustomer(customer: Customer) {

        return this.http.post(this.url, customer);
    }

    deleteContacts(id: number) {
        return this.http.delete(this.urlc + '/' + id);
    }
    updateCustomer(customer: Customer) {

        return this.http.put(this.url + '/' + customer.id, customer);
    }
    deleteCustomer(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}