import React, { useRef, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import G2, { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

const data = [
  { day: 'Mon', sold: 120 },
  { day: 'Tue', sold: 200 },
  { day: 'Wed', sold: 150 },
  { day: 'Thu', sold: 80 },
  { day: 'Fri', sold: 270 },
  { day: 'Sat', sold: 110 },
  { day: 'Sun', sold: 130 },
];

const G2Bar = () => {
  const chartParent = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);
  const draw = () => {
    const dom: HTMLElement = document.createElement('div');
    dom.style.height = '100%';
    dom.style.width = '100%';
    (ReactDOM.findDOMNode(chartParent.current) as Element).appendChild(dom);
    const chart = new Chart({
      container: dom,
      height: 300,
      width: 900,
    });
    chart.data(data);
    chart.interval().position('day*sold');
    chart.render();
    chartRef.current = chart;
  };
  useEffect(() => {
    draw();
    return () => chartRef.current.destroy();
  });
  return <div className="chart" ref={chartParent} />;
};

export default G2Bar;
