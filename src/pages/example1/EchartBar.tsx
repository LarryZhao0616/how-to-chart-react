import React from 'react';
import ReactEcharts from 'echarts-for-react';

const echart_bar_option = {
  title: {
    text: 'ECharts Bar',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 270, 110, 130],
      type: 'bar',
    },
  ],
};

export default () => {
  return <ReactEcharts option={echart_bar_option} />;
};
