import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Customer } from './customer';
import { Contact } from './contact';
import { fail } from 'assert';
import { SourceModel } from './sourcemodel';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    sourcemodel: SourceModel = new SourceModel();

    ngOnInit() { }
}