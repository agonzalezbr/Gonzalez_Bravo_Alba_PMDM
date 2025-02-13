import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
//import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IPregunta {
  logotipo: string;
  respuesta: string;
  //Ez dira json-ean existitzen
  respuestasIncorrectas: string[];
  intentos: number;
  acierto: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CuestionarioService {
  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  respuesta: IPregunta[] = [];

  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak
  constructor(private http: HttpClient, private alertCtrl: AlertController) {
    //Datuak kargatu
    this.getDatuak();
  }

  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean
  getDatuak(): Observable<{ IPregunta: any[] }> {
    const datuakEsteka = 'assetsdatosdatos.json';
    return this.http.get<{ IPregunta: any[] }>(datuakEsteka);
  }

  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.
  async fitxategiaIrakurri() {
    
  }

  // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu
  getDatuakArray() {
    this.getDatuak().subscribe((data) => {
      this.respuesta = data.IPregunta;
    });
  }

  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an

  async mostrarAlerta() {
    const alert = await this.alertCtrl.create({
      header: '¿De que marca es este logotipo?',
      inputs: [
        {
          type: 'text',
          name: 'texto',
          placeholder: 'Atencion a la ortografia.',
        },
      ],
      buttons: [
        {
          text: 'ENVIAR',
          handler: () => {
            console.log('Botón enviar pulsado');
          },
        },
      ],
    });
    await alert.present();
  }
}
