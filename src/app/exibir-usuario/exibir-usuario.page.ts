import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibir-usuario',
  templateUrl: './exibir-usuario.page.html',
  styleUrls: ['./exibir-usuario.page.scss'],
})
export class ExibirUsuarioPage implements OnInit {

  public id = 1;
  public user: any = {};
  

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute  
    ) { }

  ngOnInit() {

    this.buscarUsuario(this.id);
    
  }

  public buscarUsuario(id: number){


    this.id = id;
    
    this.userService.buscarId(id).subscribe(dados => {
      
      this.user = dados;

      console.log("User: ", this.user);
    });

  }





}
