import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    {
        path: "produtos",
        // component: ProdutosComponent,
        children: [
            {
                path: ':id',
                component: DetalhesProdutoComponent,
            },]
    },
    {
        path: "carrinho",
        component: CarrinhoComponent,
    },
    {
        path: "contato",
        component: ContatoComponent,
    },
    {
        path: "",
        component: ProdutosComponent,
    },
    {
        path: "**",
        component: NotFoundComponent,
    },
    // {
    //     path: "produtos/:id",
    //     component: DetalhesProdutoComponent,
    // },
    // {
    //     path: "",
    //     component: MainComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: HomeComponent,
    //         },
    //         {
    //             path: 'help',
    //             component: HelpComponent,
    //         },
    //     ]
    // }
];
