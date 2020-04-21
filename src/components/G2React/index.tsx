import * as React from 'react';
import { Chart as InnerChart } from './entry';

export interface StateProps {

}

export interface ChartProps {

}

export class ChartWithState extends React.Component<ChartProps & StateProps> {
  public render() {
    // todo 做状态管理，配置项预处理等
    return <InnerChart {...this.props} />
  }
}

export default ChartWithState;
