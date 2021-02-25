import { UserService } from '../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaUsuarios: any = [];
  public pagina = 0;
  public totalPaginas = 1;

  constructor(private userService: UserService) {}

  ionViewWillEnter(){

    this.buscarUsuarios(1);

  }

  public buscarUsuarios(pagina: number){

    if (pagina <= 0){
      pagina = 1;
    }

    this.pagina = pagina;
    
    this.userService.buscarTodos(pagina).subscribe(dados => {
      
      this.listaUsuarios = dados['results'];
      
      this.totalPaginas = 1;

      

      //console.log("Lista: ", this.listaUsuarios);
      console.log("Lista: ", this.listaUsuarios[0]);

    });

  } 

}