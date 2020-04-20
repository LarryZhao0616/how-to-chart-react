import React from 'react';
import ReactEcharts from 'echarts-for-react';
import EchartBar from '@/pages/example1/EchartBar';
import EchartPie from './EchartPie';
import EchartLine from './EchartLine';
import G2BarLine from './G2BarLine';
import './index.less';

export default () => {
  return (
    <div className="example">
      <div className="row">
        <div className="item">
          <EchartBar />
        </div>
        <div className="item">
          <EchartLine />
        </div>
      </div>
      <div className="row">
        <div className="item">
          <EchartPie />
        </div>
        <div className="question">
          如果想某一个柱子更宽，变色呢？ 如果只想某一瓣给name呢？
          如果我想定制guild line呢？ 如果想一半玫瑰图一半饼图呢？
        </div>
      </div>
      <G2BarLine />
    </div>
  );
};
