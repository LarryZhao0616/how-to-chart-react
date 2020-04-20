import React from 'react';
import { IRouteComponentProps } from 'umi';
import GeneralLayout from './GeneralLayout';
import './index.less';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return <GeneralLayout>{children}</GeneralLayout>;
}
