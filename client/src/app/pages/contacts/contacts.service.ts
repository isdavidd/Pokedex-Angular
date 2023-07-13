import { Injectable } from "@angular/core";
import { Cria } from "src/app/shared/Cria";

@Injectable()
export class ContactsService {
    private crias: Cria[] = [
        new Cria(
            'Vinícius Alves David',
            '../../../assets/1652034063244.jpg',
            'Estudante de Ciência da Computação no Centro Federal de Educação '+
            'Tecnológica Celso Suckow da Fonseca (CEFET-RJ). Sempre gostei de '+
            'explorar e estudar as tecnologias que fazem parte do nosso cotidiano, '+
            'acabei desenvolvendo um fascínio por saber como elas funcionam, por '+
            'causa disso me apaixonei pela área da tecnologia da informação, '+
            'sobretudo a parte de desenvolvimento de software. Tendo isso em vista '+
            'pretendo adquirir experiência no mercado de trabalho em projetos '+
            'pessoais como esse, com foco em Angular e .NET, almejando me tornar um '+
            'desenvolvedor Fullstack.',
            'https://github.com/isdavidd',
            'https://linkedin.com/in/viniciusalvesdavidd',
            'vini1100@outlook.com'
          ),
          new Cria(
            'Marcus Vinícius Lima',
            '../../../assets/88695069.png',
            'Estudante de Ciência da Computação no Centro Federal de Educação '+
            'Tecnológica Celso Suckow da Fonseca (CEFET-RJ). Sempre gostei de '+
            'explorar e estudar as tecnologias que fazem parte do nosso cotidiano, '+
            'acabei desenvolvendo um fascínio por saber como elas funcionam, por '+
            'causa disso me apaixonei pela área da tecnologia da informação, '+
            'sobretudo a parte de desenvolvimento de software. Tendo isso em vista '+
            'pretendo adquirir experiência no mercado de trabalho em projetos '+
            'pessoais como esse, com foco em Angular e .NET, almejando me tornar um '+
            'desenvolvedor Fullstack.',
            'https://github.com/MarcusLDC',
            'https://linkedin.com/in/marcus-vinicius-lima-da-costa-256714175',
            'veliok@gmail.com'
          )
    ];

    constructor() {

    }

    getCria (): Cria[] {
        return this.crias.slice();
    }
    
}