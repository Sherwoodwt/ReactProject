export interface Album {
  id?: number;
  name: string;
  tracks: Song[];
  artwork: string;
  releaseDate: Date;
  isReleased: boolean;
  isPhysical: boolean;
}

export interface Song {
  id?: number;
  name: string;
  isSingle: boolean;
  artwork: string;
  releaseDate?: Date;
  isReleased?: boolean;
  isPhysical?: boolean;
  recordings: string;
  videos?: string;
}
