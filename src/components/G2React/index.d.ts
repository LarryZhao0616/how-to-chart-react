export = g2react;
export as namespace g2react;

declare namespace g2react {

  export interface QueryParam {
    chartType: string,
    [key: string]: any
  }

  export interface ChartProps {
    queryParam: QueryParam; //数据请求
    height?: number;
    width?: number;
    border?: boolean;
    theme?: 'default' | 'dark' | object;
    padding?: number;
    style?: React.CSSProperties;
    customProps?: any;
    customChartData?: any;
  }

}