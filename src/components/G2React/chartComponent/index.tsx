import LineChart from './LineChart';
import BubbleChart from './BubbleChart';
import BarChart from './BarChart';

import ParamModel from '../model/ParamModel';

// 不同图表扩展
const chartMap: {[key: string]: any} = {
  bar: BarChart,
  line: LineChart,
  bubble: BubbleChart,
};

export default (queryParam: any) => {
  const chartType: string = new ParamModel(queryParam).getChartType();
  return chartMap[chartType] || null;
};
