import CameraRoll from '@react-native-community/cameraroll';

export declare namespace AppPhotosType {
  type PhotosPage = CameraRoll.PhotoIdentifiersPage;
  type PhotosType = CameraRoll.PhotoIdentifier;
}

export class AppPhotos {
  private static _EmptyPage: AppPhotosType.PhotosPage = {
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
    try {
      const res = await CameraRoll.getPhotos(params);

      return res;
    } catch (error) {
      return this._EmptyPage;
    }
  }
}
