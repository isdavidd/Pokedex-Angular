import { Component, OnInit, Input } from '@angular/core';

import { ContactsService } from '../contacts.service';

import { AnimationProp, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Cria } from 'src/app/shared/Cria';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {
  @Input() cria!: Cria;

  githubAnimationValue: AnimationProp | undefined = undefined ;
  linkedinAnimationValue: AnimationProp | undefined = undefined;
  emailAnimationValue: AnimationProp | undefined = undefined;

  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  constructor (private contactsService: ContactsService) {

  }

  onMouseEnter (icon: FaIconComponent, title: string) {    
    title == 'github' ? this.githubAnimationValue = 'bounce'
    : title == 'linkedin' ? this.linkedinAnimationValue = 'bounce'
    : this.emailAnimationValue = 'bounce';
    
  }

  onMouseLeave (icon: FaIconComponent, title: string) {
    title == 'github' ? this.githubAnimationValue = undefined
    : title == 'linkedin' ? this.linkedinAnimationValue = undefined
    : this.emailAnimationValue = undefined;
  }

  ngOnInit () {
  }
}

