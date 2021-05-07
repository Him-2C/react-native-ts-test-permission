import CameraRoll from '@react-native-community/cameraroll';
import {AppPermission} from './AppPermission';

export declare namespace AppPhotosType {
  type PhotosPage = CameraRoll.PhotoIdentifiersPage;
  type PhotosType = CameraRoll.PhotoIdentifier;
}

export class AppPhotos {
  private static emptyResponse: AppPhotosType.PhotosPage = {
    edges: [],
    page_info: {
      has_next_page: false,
      end_cursor: '',
      start_cursor: '',
    },
  };

  static async getPhotos(
    params: CameraRoll.GetPhotosParams,
  ): Promise<AppPhotosType.PhotosPage> {
    const isCanAcess = await AppPermission.reqPermission('photos');

    if (!isCanAcess) {
      return this.emptyResponse;
    }

    try {
      const res = await CameraRoll.getPhotos(params);

      return res;
    } catch (error) {
      return this.emptyResponse;
    }
  }
}
