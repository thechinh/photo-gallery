import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.photogallery',
  appName: 'photo-gallery',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
