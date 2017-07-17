import * as React from 'react';

export interface HelloProps {
  name: string;
}

export const Hello: React.SFC<HelloProps> = props => (
  <div>
    <h1>Hello {props.name}</h1>
    
  </div>
);
