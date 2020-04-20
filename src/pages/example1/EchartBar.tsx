import React from 'react';
import mock, { s1, s2, xSet } from '@/../mock/mockData';
import ReactEcharts from 'echarts-for-react';

const echart_bar_option = {
  // title: {
  //   text: 'ECharts Bar',
  // },
  grid: {
    height: 270,
    width: 480,
    left: '0%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    data: xSet,
  },
  legend: {
    data: ['iOS', 'Android'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: s1,
      type: 'bar',
      name: 'iOS',
    },
    {
      data: s2,
      type: 'bar',
      name: 'Android',
    },
  ],
};

export default () => {
  return <ReactEcharts option={echart_bar_option} />;
};
