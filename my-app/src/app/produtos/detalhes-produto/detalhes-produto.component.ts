import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { IProduto, iProdutoCarrinho } from '../../produtos';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService, 
    private route: ActivatedRoute, 
    private notificacaoService: NotificacaoService,
    private carrinhoService : CarrinhoService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
    // console.log(this.produto);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: iProdutoCarrinho = {
      ...this.produto!, //Esses ... quer dizer produto vai receber tudo que já tem em produto
      quantidade: this.quantidade //e também a quantidade
    } 
    console.log(produto)
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

}
