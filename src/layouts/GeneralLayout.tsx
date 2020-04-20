import React from 'react';
import Nav from './Nav';
import './index.less';

interface Props {
  banner?: React.ReactFragment;
  nav?: React.ReactFragment;
}

const GeneralLayout: React.SFC<Props> = ({ banner, nav, children }) => {
  return (
    <div className="general-layout">
      <Nav />
      <div className="content">{children}</div>
    </div>
  );
};

export default GeneralLayout;
