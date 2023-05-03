import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import React, { useState } from 'react';




const fotos: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galeria Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Fotos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Borrar',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: 'Cancelar',
              icon: close,
              role: 'cancel',
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default fotos;
