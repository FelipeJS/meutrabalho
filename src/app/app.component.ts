import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PessoaFisicaService } from './services/pessoaFisica.service';

import { PessoaFisica } from '../pages/pessoaFisica/pessoaFisica';
import { PessoaJuridica } from '../pages/pessoaJuridica/pessoaJuridica';



@Component({
  templateUrl: 'app.html',
  providers: [PessoaFisicaService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PessoaFisica;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Pessoas', component: PessoaFisica },
      { title: 'Empresas', component: PessoaJuridica }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
