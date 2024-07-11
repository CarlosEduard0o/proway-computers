import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  
  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    // console.log(`ID: ${produtoId}`)
    let retornoProduto = undefined;
    this.produtos.forEach((p) => {
      if (produtoId === p.id){
        retornoProduto = p;
      }
    })
    return retornoProduto;
  }
}
