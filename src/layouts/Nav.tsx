import React from 'react';
import { NavLink } from 'umi';
import './index.less';

const Links = [
  {
    title: 'echart vs g2',
    to: '/example1',
  },
  {
    title: '图形语法',
    to: '/ggchart',
  },
  {
    title: '',
    to: '/example3',
  },
  {
    title: '',
    to: '/example4',
  },
];

const Nav: React.SFC<{}> = props => {
  const navItems = Links.map((l, index) => {
    return (
      <li key={l.to}>
        <NavLink to={l.to}>{l.title}</NavLink>
      </li>
    );
  });
  return (
    <div className="nav-container">
      <ul className="nav">{navItems}</ul>
    </div>
  );
};

export default Nav;
