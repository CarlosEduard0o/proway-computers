import { Component, OnInit } from '@angular/core';
import { iProdutoCarrinho } from '../produtos';
import { CarrinhoService } from '../carrinho.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: iProdutoCarrinho[] = [];
  total = 0;

  constructor(public carrinhoService: CarrinhoService, private router: Router){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal(){
    //prev é o elemento anterior
    //cuur é o elemento atual
    //Abaixo é um jeto de somar o preço de todos os itens da lista itensCarrinho
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    //Pedindo para calcular o total denovo após realizar a remoção
    this.calculaTotal();
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate([""]);
  }

}
