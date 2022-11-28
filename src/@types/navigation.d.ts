export interface MusicParams {
  id: string;
  title: string;
  artist: string;
  duration: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      music: {
        id: string;
        title: string;
        artist: string;
        duration: string;
        bannerUrl: string;
      };
      profile: undefined;
      favorites: undefined;
    }
  }
}
