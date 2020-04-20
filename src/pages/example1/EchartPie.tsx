import React from 'react';
import ReactEcharts from 'echarts-for-react';

const echart_pie_option = {
  title: {
    text: 'ECharts Pie',
  },
  // xAxis: {
  //   type: 'category',
  //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // },
  // yAxis: {
  //   type: 'value',
  // },
  series: [
    {
      data: [{ value: 12, name: 'test' }, 200, 150, 80, 270, 110, 130],
      //data: [12, 200, 150, 80, 270, 110, 130],
      type: 'pie',
      //roseType: true,
    },
  ],
};

export default () => {
  return <ReactEcharts option={echart_pie_option} />;
};
