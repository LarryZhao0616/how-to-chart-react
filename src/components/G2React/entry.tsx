import * as React from 'react';
import * as d from './index.d';
import useMeasure from 'react-use/lib/useMeasure';
import useDataSource from './dataSource';
import getChartComponent from './chartComponent';


const InnerGioChart: React.SFC<g2react.ChartProps> = (props) => {
  // 数据请求 或 数据预处理逻辑
  //const [chartdata, fetchStatus] = useDataSource(props.queryParam, props.customChartData);

  const ChartComponent = getChartComponent(props.queryParam);
  const chartType = props.queryParam.chartType;
  
  // todo 可以在chart上封装title，info等组件
  return (
    <div
      className="chart-wrapper"
      style={{
        width: props.width,
        height: props.height,
        border: props.border ? '1px solid #dae2e5' : null,
        padding: props.padding + 'px',
        ...props.style,
      }}
    >
      <ChartComponent
        height={props.height}
        width={props.width}
        queryParam={props.queryParam}
        chartdata={chartdata}
        theme={props.theme}
      />
    </div>
  );
}

export const Chart: React.SFC<any> = (props) => {
  // 宽高自适应
  const [ref, { width, height }] = useMeasure();
  let chartWidth = width;
  let chartHeight = height;
  if (props.height && props.width) {
    chartWidth = props.width;
    chartHeight = props.height;
  }

  // todo 可以嵌套error boundary等逻辑
  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>(
      <InnerGioChart {...props} height={chartHeight} width={chartWidth} />
    </div>
  )
}
