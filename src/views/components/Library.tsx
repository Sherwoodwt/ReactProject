import * as React from 'react';
import * as Moment from 'moment';

import {
  Table
} from 'reactstrap';

import { Album } from '../../modules/models';

export interface LibraryProps {
  albums: Album[];
}

export const LibraryComponent: React.SFC<LibraryProps> = props => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
         {props.albums.map(album => (
           <tr key={album.id}>
             <td>{album.name}</td>
             <td>{Moment(album.releaseDate).format('MMM Do, YYYY')}</td>
           </tr>
         ))}
      </tbody>
    </Table>
  </div>
);
