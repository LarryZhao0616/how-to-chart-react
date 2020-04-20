import React from 'react';
import ReactEcharts from 'echarts-for-react';
import EchartBar from '@/pages/example1/EchartBar';
import EchartPie from './EchartPie';
import G2Bar from './G2Bar';
import './index.less';

export default () => {
  return (
    <div className="example">
      <div className="item">
        <EchartBar />
      </div>
      <div className="item">
        <EchartPie />
        <div className="question">
          如果不想要左侧留白呢？如果想某一个柱子更宽，变色呢？ 如果只想某一瓣给name呢？ 如果我想定制guild
          line呢？ 如果想一半玫瑰图一半饼图呢？
        </div>
      </div>
      <div className="item">
        <G2Bar />
      </div>
    </div>
  );
};
