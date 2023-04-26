import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Photo } from './photo';
// import { AngularFireModule } from "@angular/fire/compat";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  private async savePhoto(dataUrl: string, latitude: number, longitude: number) {
    const name = new Date().getUTCMilliseconds().toString();
    const upload = await this.storage.ref(name).putString(dataUrl, 'data_url');
    const photoUrl = await upload.ref.getDownloadURL();
    await this.firestore.collection<Photo>('photos').add({
      url: photoUrl,
      lat: latitude,
      lng: longitude
    });
  }

  async takePhoto() {
    const {latitude, longitude} = await this.getLocation();
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    if (cameraPhoto.dataUrl) {
      await this.savePhoto(cameraPhoto.dataUrl, latitude, longitude);
    } else {
      alert('Error: Unable to capture photo. Something went wrong.');
    }
  }
}
