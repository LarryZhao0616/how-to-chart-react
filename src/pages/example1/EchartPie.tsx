import React from 'react';
import mock, { s1, s2, xSet } from '@/../mock/mockData';
import ReactEcharts from 'echarts-for-react';

const echart_pie_option = {
  title: {
    text: 'ECharts Pie',
  },
  // xAxis: {
  //   type: 'category',
  //   data: xSet,
  // },
  // yAxis: {
  //   type: 'value',
  // },
  series: [
    {
      data: mock,
      //data: [12, 200, 150, 80, 270, 110, 130],
      type: 'pie',
      //roseType: true,
    },
  ],
};

export default () => {
  return <ReactEcharts option={echart_pie_option} />;
};
