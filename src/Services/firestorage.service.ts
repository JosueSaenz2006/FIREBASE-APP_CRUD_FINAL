import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public fireS: AngularFireStorage ) { }

  uploadImage()
  {
    return new Promise(  resolve => {
      setTimeout(() => {
        resolve(true);
        console.log('responde la promesa')
        return;
      },2000);

    });
  }

  
  
}