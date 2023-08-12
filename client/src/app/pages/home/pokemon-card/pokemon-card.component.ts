import { Component, Input, OnInit } from '@angular/core';

import { NgbModal, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit{
  @Input() pokemon: any;
  progressBarHeight: string = "25px"
  maxValue: number = 255;

  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
    
  }

  openModal(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

}
