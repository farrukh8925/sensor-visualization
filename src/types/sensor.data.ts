export type SensorDataSet = {
  date: Date;
  hour?: Number;
  sensor1: number;
  sensor2: number;
  sensor3: number;
  sensor4: number;
};

export type SensorContextState = {
  addDataSet: (dataSet: SensorDataSet[]) => void;
  addData: (data: SensorDataSet) => void;
  dataSet: SensorDataSet[];
};

export type SensorStatisticsData = {
  maxValue: Number;
  minValue: Number;
  maxValueDevice: String;
  minValueDevice: String;
};
