export enum FetchStatus {
  unstarted = 'unstarted',
  fetching = 'fetching',
  succeed = 'succeed',
  failed = 'failed',
}

const useDataSource = (fetchParam: any, customData: any) => {
  if (customData) {
    return [customData, FetchStatus.succeed];
  }
  // fetch data and cache data hook
};

export default useDataSource;
