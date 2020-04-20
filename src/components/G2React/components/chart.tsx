import React, { useRef } from 'react';
import Chart from '@antv/g2';
import DataSet from '@antv/data-set';
import * as ReactDOM from 'react-dom';

export default (props: any) => {
  const { source } = props;
  const chartParent = useRef<HTMLDivElement | null>(null);

  const drawChart = () => {
    const dom: HTMLElement = document.createElement('div');
    dom.style.height = '100%';
    (ReactDOM.findDOMNode(chartParent.current) as Element).appendChild(dom);
    let dataview = new DataSet.View().source(source);
    const chart = new Chart.Chart({
      container: dom,
    });
  };

  return <div className="chart" ref={chartParent} />;
};
