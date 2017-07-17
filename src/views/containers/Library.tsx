import * as React from 'react';

import { Album } from '../../modules/models';
import { LibraryComponent } from '../components/Library';
import { getLibrary } from '../../modules/services';

export class LibraryContainer extends React.Component<any, any> {
  private albums: Album[];
  constructor(props: any) {
    super(props);

    this.albums = getLibrary();
  }

  public render() {
    return (
      <LibraryComponent albums={this.albums} />
    );
  }
}
