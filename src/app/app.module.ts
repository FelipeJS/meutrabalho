import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PessoaFisica } from '../pages/pessoaFisica/pessoaFisica';
import { PessoaFisicaDetails } from '../pages/pessoaFisicaDetails/pessoaFisicaDetails';
import { PessoaJuridica } from '../pages/pessoaJuridica/pessoaJuridica';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PessoaFisica,
    PessoaFisicaDetails,
    PessoaJuridica
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PessoaFisica,
    PessoaFisicaDetails,
    PessoaJuridica
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
