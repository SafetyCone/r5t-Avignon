import { TimeSpanHelper } from "./TimeSpanHelper";

export class TimeHelper
{
    public static readonly MillisecondUnit = "millisecond";
    public static readonly SecondUnit = "second";
    public static readonly MinuteUnit = "minute";
    public static readonly HourUnit = "hour";
    public static readonly DayUnit = "day";
    public static readonly WeekUnit = "week";
    public static readonly MonthUnit = "month";
    public static readonly YearUnit = "year";

    public static readonly MillisecondsPerSecond = 1000;
    public static readonly SecondsPerMinute = 60;
    public static readonly MillisecondsPerMinute = TimeHelper.MillisecondsPerSecond * TimeHelper.SecondsPerMinute;
    public static readonly MinutesPerHour = 60;
    public static readonly MillisecondsPerHour = TimeHelper.MillisecondsPerMinute * TimeHelper.MinutesPerHour;
    public static readonly HoursPerDay = 24;
    public static readonly MillisecondsPerDay = TimeHelper.MillisecondsPerHour * TimeHelper.HoursPerDay;
    public static readonly DaysPerWeek = 7;
    public static readonly MillisecondsPerWeek = TimeHelper.MillisecondsPerDay * TimeHelper.DaysPerWeek;
    public static readonly DaysPerYear = 365;
    public static readonly MillisecondsPerYear = TimeHelper.MillisecondsPerDay * TimeHelper.DaysPerYear;


    public static TotalFractionalSeconds(elapsedMilliseconds: number)
    {
        let output = elapsedMilliseconds / TimeHelper.MillisecondsPerSecond;
        return output;
    }

    /**
     * Returns an integer number of seconds (rounded down).
     */
    public static TotalIntegerSeconds(elapsedMilliseconds: number)
    {
        let fractionalSeconds = TimeHelper.TotalFractionalSeconds(elapsedMilliseconds);

        let output = Math.floor(fractionalSeconds);
        return output;
    }

    /**
     * Default method, uses integer seconds (which rounds down).
     */
    public static TotalSeconds(elapsedMilliseconds: number)
    {
        let output = TimeHelper.TotalIntegerSeconds(elapsedMilliseconds);
        return output;
    }

    public static ToTimeSpan(elapsedMilliseconds: number)
    {
        let timeSpan = TimeSpanHelper.ToTimeSpan(elapsedMilliseconds);
        return timeSpan;
    }
}