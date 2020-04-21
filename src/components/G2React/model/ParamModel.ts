import { cloneDeep, pick } from 'lodash';
export default class QueryParamModel  {
  private param: any = null

  constructor(queryParam: any) {
    this.param = cloneDeep(queryParam);
  }

  // 根据配置参数自动判定图表类型
  public getChartType = () => {
    return this.param.chartType || 'line';
  }

  // todo 扩展闭包
}