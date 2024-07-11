import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { RouterLink } from '@angular/router';
import { BarraPesquisaComponent } from "../barra-pesquisa/barra-pesquisa.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    BarraPesquisaComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public carrinhoService: CarrinhoService){}

}
