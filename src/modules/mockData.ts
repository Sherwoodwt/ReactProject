import { Album, Song } from './models';

const mockSong1: Song = {
  id: 1,
  artwork: 'song1url.com',
  isSingle: false,
  name: 'First',
  recordings: 'song1recordings.com',
};

const mockSong2: Song = {
  id: 2,
  artwork: 'song2url.com',
  isPhysical: false,
  isReleased: true,
  isSingle: true,
  name: 'Second',
  recordings: 'song2recordings.com',
  releaseDate: new Date(2017, 6, 28),
  videos: 'song2video.com',
};

const mockSong3: Song = {
  id: 3,
  artwork: 'song3url.com',
  isPhysical: true,
  isReleased: true,
  isSingle: true,
  name: 'Third',
  recordings: 'song3recordings.com',
  releaseDate: new Date(2017, 7, 1),
  videos: 'song3video.com',
};

const mockAlbum1: Album = {
  id: 1,
  artwork: 'url.com',
  isPhysical: true,
  isReleased: true,
  name: 'Album 1',
  releaseDate: new Date(2017, 7, 21),
  tracks: [ mockSong1, mockSong2, mockSong3 ],
};

const mockSong4: Song = {
  id: 4,
  artwork: 'song4url.com',
  isSingle: false,
  name: 'Cat Song',
  recordings: 'song4recordings.com',
};

const mockSong5: Song = {
  id: 5,
  artwork: 'song5url.com',
  isPhysical: false,
  isReleased: false,
  isSingle: true,
  name: 'Dog Song',
  recordings: 'song5recordings.com',
  releaseDate: new Date(2017, 10, 15),
};

const mockAlbum2: Album = {
  id: 2,
  artwork: 'url2.com',
  isPhysical: true,
  isReleased: false,
  name: 'Album 2',
  releaseDate: new Date(2018, 3, 6),
  tracks: [ mockSong4, mockSong5 ],
};

export const mockLibrary: Album[] = [ mockAlbum1, mockAlbum2 ];
