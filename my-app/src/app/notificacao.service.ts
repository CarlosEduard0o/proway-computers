import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }

  notificar(mensagem: string){
    this.snackBar.open(mensagem, "ok", {
      duration: 2000, //2000=2segundos
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
}
