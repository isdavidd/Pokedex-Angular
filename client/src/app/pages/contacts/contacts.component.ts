import { Component, OnInit } from '@angular/core';

import { Cria } from 'src/app/shared/Cria';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ ContactsService ]
})
export class ContactsComponent implements OnInit {
  crias: Cria[] = [];

  constructor(private contactsService: ContactsService) {

  }

  ngOnInit() {
    this.crias = this.contactsService.getCria();
  }

}
