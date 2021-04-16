
export const enum TimeseriesEnum {
        Hour = 'hour',
        Day = 'day',
        Month = 'month',
        Year = 'year',
        Minute = 'minute',
        Second = 'second'
}
export type TimeSeriesUnitType = TimeseriesEnum.Hour | TimeseriesEnum.Day | TimeseriesEnum.Month | TimeseriesEnum.Year | TimeseriesEnum.Minute | TimeseriesEnum.Second;
