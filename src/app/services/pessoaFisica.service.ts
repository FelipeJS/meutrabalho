import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PessoaFisicaService{
    http: any;
    baseUrl: String;

    constructor(http: Http){
        this.http = http;
        this.baseUrl = 'http://192.168.25.3/pessoaFisica/';
    }

    getPessoaFisica(operacao){
        return this.http.get(this.baseUrl + operacao).map(res => res.json());
    }
}