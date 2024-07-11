import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLocaleLowerCase();
      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    })
  }

}
