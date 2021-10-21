import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { IProperties } from 'src/app/interfaces/properties/properties.interface';

import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  properties: IProperties[] = [
    {
      _id: '1',
      Category: 'Casa',
      Image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      Location: {
        Latitud: '23.226767',
        Longitud: '-106.426414',
      },
      Name: 'Casa Moderna',
      Status: 'Renta'
    }
  ]
  private propertiesCollection: AngularFirestoreCollection<IProperties>;

  constructor(
    private http: HttpClient,
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
  ) {
    this.propertiesCollection = angularFirestore.collection<IProperties>('properties');
  }

  getAllProperties(): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/properties/`);
  }

  getProperties(): IProperties[] {
    return this.properties;
  }

  /**
   * Obtiene las noticias registradas en firebase
   */
  getPropertiesFirebase(): Observable<IProperties[]> {
    return this.propertiesCollection.valueChanges({idField: '_id'});
  }

  loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
