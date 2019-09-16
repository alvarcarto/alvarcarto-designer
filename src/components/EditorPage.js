import React from 'react';
import SidePanel from './SidePanel';
import LightWall from './LightWall';

class EditorPage extends React.Component {
  render() {
    return (
      <div className="EditorPage">
        <SidePanel />
        <LightWall />
      </div>
    );
  }
}

export default EditorPage;
