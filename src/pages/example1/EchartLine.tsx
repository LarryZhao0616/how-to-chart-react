import mock, { s1, s2, xSet } from '@/../mock/mockData';
import React from 'react';
import ReactEcharts from 'echarts-for-react';
//@ts-ignore
import DataSet, { DataView } from '@antv/data-set';

const dv = new DataView().source(mock);

const option = {
  title: {
    text: 'Echart Line'
  },
  xAxis: {
    type: 'category',
    data: Array.from(xSet),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: s1,
      type: 'line',
    },
    {
      data: s2,
      type: 'line',
    },
  ],
};

export default () => {
  console.log('antv-data-set', dv.rows, Array.from(xSet));
  return <ReactEcharts option={option} />;
};
