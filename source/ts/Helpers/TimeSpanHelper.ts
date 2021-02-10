import { TimeSpan } from "../Classes/TimeSpan";
import { TimeSpanFormatter } from "../Types/TimeSpanFormatter";
import { NumberHelper } from "./NumberHelper";
import { TimeHelper } from "./TimeHelper";

export class TimeSpanHelper
{
    public static readonly ForeverDisplayString = "Forever";

    public static readonly DefaultFormatter: TimeSpanFormatter = TimeSpanHelper.ToStringDescriptiveRelativeAge;


    public static ToTimeSpan(elapsedMilliseconds: number)
    {
        let years = Math.round(elapsedMilliseconds / TimeHelper.MillisecondsPerYear);
        let lessThanAYear = elapsedMilliseconds % TimeHelper.MillisecondsPerYear;
        let days = Math.round(lessThanAYear / TimeHelper.MillisecondsPerDay);
        let lessThanADay = lessThanAYear % TimeHelper.MillisecondsPerDay;
        let hours = Math.round(lessThanADay / TimeHelper.MillisecondsPerHour);
        let lessThanAnHour = lessThanADay % TimeHelper.MillisecondsPerHour;
        let minutes = Math.round(lessThanAnHour / TimeHelper.MillisecondsPerMinute);
        let lessThanAMinute = lessThanAnHour % TimeHelper.MillisecondsPerMinute;
        let seconds = Math.round(lessThanAMinute / TimeHelper.MillisecondsPerSecond);
        let milliseconds = lessThanAMinute % TimeHelper.MillisecondsPerSecond;

        let timeSpan = new TimeSpan();
        timeSpan.Years = years;
        timeSpan.Days = days;
        timeSpan.Hours = hours;
        timeSpan.Minutes = minutes;
        timeSpan.Seconds = seconds;
        timeSpan.Milliseconds = milliseconds;

        return timeSpan;
    }

    /**
     * Returns the integer number of milliseconds represented by the input.
     */
    public static TotalMilliseconds(timeSpan: TimeSpan)
    {
        var totalMilliseconds =
            timeSpan.Years * TimeHelper.MillisecondsPerYear +
            timeSpan.Days * TimeHelper.MillisecondsPerDay +
            timeSpan.Hours * TimeHelper.MillisecondsPerHour + 
            timeSpan.Minutes * TimeHelper.MillisecondsPerMinute +
            timeSpan.Seconds * TimeHelper.MillisecondsPerSecond +
            timeSpan.Milliseconds;

        return totalMilliseconds;
    }

    /**
     * Returns the non-integer number of seconds represented by the input.
     */
    public static TotalSeconds(timeSpan: TimeSpan)
    {
        var totalMilliseconds = TimeSpanHelper.TotalMilliseconds(timeSpan);

        var totalSeconds = totalMilliseconds / TimeHelper.MillisecondsPerSecond;
        return totalSeconds;
    }

    /**
     * Returns the non-integer number of days represented by the input.
     */
    public static TotalDays(timeSpan: TimeSpan)
    {
        var totalMilliseconds = TimeSpanHelper.TotalMilliseconds(timeSpan);

        var totalDays = totalMilliseconds / TimeHelper.MillisecondsPerDay;
        return totalDays;
    }

    public static IsLessThan(timeSpan: TimeSpan, numerOfMilliseconds: number)
    {
        let totalMilliseconds = TimeSpanHelper.TotalMilliseconds(timeSpan);

        var isLessThan = totalMilliseconds < numerOfMilliseconds;
        return isLessThan;
    }

    public static IsLessThanAMinute(timeSpan: TimeSpan)
    {
        let output = TimeSpanHelper.IsLessThan(timeSpan, TimeHelper.MillisecondsPerMinute);
        return output;
    }

    public static IsLessThanAnHour(timeSpan: TimeSpan)
    {
        let output = TimeSpanHelper.IsLessThan(timeSpan, TimeHelper.MillisecondsPerHour);
        return output;
    }

    public static IsLessThanADay(timeSpan: TimeSpan)
    {
        let output = TimeSpanHelper.IsLessThan(timeSpan, TimeHelper.MillisecondsPerDay);
        return output;
    }

    public static IsLessThanAWeek(timeSpan: TimeSpan)
    {
        let output = TimeSpanHelper.IsLessThan(timeSpan, TimeHelper.MillisecondsPerWeek);
        return output;
    }

    public static ToStringDescriptiveRelativeAge(timeSpan: TimeSpan)
    {
        if(TimeSpanHelper.IsLessThanAMinute(timeSpan))
        {
            let output = NumberHelper.ToStringWithUnits(timeSpan.Seconds, TimeHelper.SecondUnit);
            return output;
        }

        if(TimeSpanHelper.IsLessThanAnHour(timeSpan))
        {
            let minutes = NumberHelper.ToStringWithUnits(timeSpan.Minutes, TimeHelper.MinuteUnit);
            let seconds = NumberHelper.ToStringWithUnits(timeSpan.Seconds, TimeHelper.SecondUnit);
            let output = `${minutes}, ${seconds}`;
            return output;
        }

        if(TimeSpanHelper.IsLessThanADay(timeSpan))
        {
            let hours = NumberHelper.ToStringWithUnits(timeSpan.Hours, TimeHelper.HourUnit);
            let minutes = NumberHelper.ToStringWithUnits(timeSpan.Minutes, TimeHelper.MinuteUnit);
            let output = `${hours}, ${minutes}`;
            return output;
        }

        if(TimeSpanHelper.IsLessThanAWeek(timeSpan))
        {
            let days = NumberHelper.ToStringWithUnits(timeSpan.Days, TimeHelper.DayUnit);
            let hours = NumberHelper.ToStringWithUnits(timeSpan.Hours, TimeHelper.HourUnit);
            let output = `${days}, ${hours}`;
            return output;
        }

        let totalDays = Math.floor(TimeSpanHelper.TotalDays(timeSpan));
        let weeks = Math.floor(totalDays / TimeHelper.DaysPerWeek);
        let extraDays = totalDays % TimeHelper.DaysPerWeek;

        let weeksString = NumberHelper.ToStringWithUnits(weeks, TimeHelper.WeekUnit);
        let extraDaysString = NumberHelper.ToStringWithUnits(extraDays, TimeHelper.DayUnit);
        let output = `${weeksString}, ${extraDaysString}`;
        return output;
    }
}