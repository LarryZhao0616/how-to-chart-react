import React, { useRef, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import mock, { s1, s2, xSet } from '@/../mock/mockData';
import G2, { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
const base_Style = {
  height: 270,
  width: 480,
};
const G2BarLine = () => {
  const chartParent = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);
  const drawBar = () => {
    const dom: HTMLElement = document.createElement('div');
    (ReactDOM.findDOMNode(chartParent.current) as Element).appendChild(dom);
    const chart = new Chart({
      container: dom,
      ...base_Style,
    });
    chart.data(mock);
    chart.scale('type', {
      nice: true,
    });
    chart
      .interval()
      .position('day*value')
      .color('type')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);
    chart.render();
    chartRef.current = chart;
  };
  const drawLine = () => {
    const dom: HTMLElement = document.createElement('div');
    (ReactDOM.findDOMNode(chartParent.current) as Element).appendChild(dom);
    const chart = new Chart({
      container: dom,
      ...base_Style,
    });
    chart.data(mock);
    chart
      .line()
      .position('day*value')
      .color('type');
    chart.render();
    chartRef.current = chart;
  };
  useEffect(() => {
    drawBar();
    drawLine();
    return () => chartRef.current.destroy();
  });
  return <div className="row" ref={chartParent} />;
};

export default G2BarLine;
