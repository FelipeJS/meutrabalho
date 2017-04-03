import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PessoaFisicaService } from '../../app/services/pessoaFisica.service';
import { PessoaFisicaDetails } from '../pessoaFisicaDetails/pessoaFisicaDetails';

@Component({
  selector: 'pessoaFisica',
  templateUrl: 'pessoaFisica.html'
})
export class PessoaFisica {

  items = [];
  categoria: any;
  
  constructor(public navCtrl: NavController, private pessoaFisicaService: PessoaFisicaService) {
    
  }

  ngOnInit(){
    this.getPessoaFisica('listar');
  }

  getPessoaFisica(operacao){
    this.pessoaFisicaService.getPessoaFisica(operacao).subscribe(
      response => this.items = response,
      err => console.log(err)
    );
  }

  viewItem(item){
    this.navCtrl.push(PessoaFisicaDetails, {
      item:item
    });
  }

  alterarCategoria(){
    this.getPessoaFisica('listar');
  }

}
