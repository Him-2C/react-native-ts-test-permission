import {Platform} from 'react-native';
import {
  check,
  Permission,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

interface IPlatformSupport {
  readonly ios: Permission;
  readonly android: Permission;
}

interface IRequestPermissionType {
  photos: typeof PEMISSION_PHOTOS;
}

const PEMISSION_PHOTOS: IPlatformSupport = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const RequestPermissionType: IRequestPermissionType = {
  photos: PEMISSION_PHOTOS,
};

export class AppPermission {
  static async checkPermission(permissionName: keyof IRequestPermissionType) {
    try {
      const platform = Platform.OS as keyof IPlatformSupport;
      const permission = RequestPermissionType[permissionName][platform];

      const res = await check(permission);

      switch (res) {
        case 'unavailable':
          return await this.reqPermission(permissionName);
        case 'granted':
          return true;
        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  }

  static async reqPermission(permissionName: keyof IRequestPermissionType) {
    try {
      const platform = Platform.OS as keyof IPlatformSupport;
      const permission = RequestPermissionType[permissionName][platform];

      const res = await request(permission);
      return res === RESULTS.GRANTED;
    } catch (error) {
      return false;
    }
  }
}
