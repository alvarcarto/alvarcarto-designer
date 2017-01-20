import React from 'react';
import SidePanel from './SidePanel';
import LightWall from './LightWall';
import './EditorPage.css';

const EditorPage = React.createClass({
  render() {
    return (
      <div className="EditorPage">
        <SidePanel />
        <LightWall />
      </div>
    );
  }
});

export default EditorPage;
