import { DateFormatter } from "../Types/DateFormatter";
import { NumberHelper } from "./NumberHelper";
import { TimeHelper } from "./TimeHelper";
import { TimeSpanHelper } from "./TimeSpanHelper";

export class DateHelper
{
    public static readonly BeginningOfTimeServerDateString = "1/1/0001 12:00:00 AM UTC";
    public static readonly BeginningOfTimeDisplayString = "Beginning of Time";

    public static readonly DefaultFormatter: DateFormatter = DateHelper.ToStringMDYYYYHHMM_AMPM;
 
    
    /**
     * Gets the current date-time.
     */
    public static Now(): Date
    {
        var now = new Date(); // Will contain the current time.
        return now;
    }

    /**
     * The date.getDate() method for some insane reason returns a zero-based month (unlike getDate() which returns a one-based day of the month?).
     */
    public static GetMonth_OneBased(date: Date): number
    {
        let month = date.getMonth() + 1; // getMonth() is zero-based.
        return month;
    }

    public static GetMonth(date: Date): number
    {
        let month = DateHelper.GetMonth_OneBased(date);
        return month;
    }

    /**
     * The getDay() method wackily returns the day-of-the-week, not the day of the month, while getDate() returns the day of the month.
     */
    public static GetDayOfMonth(date: Date): number
    {
        let day = date.getDate();
        return day;
    }

    /**
     * The getDay() method wackily returns the day-of-the-week, not the day of the month, while getDate() returns the day of the month.
     * The getDay() method is also zero-based.
     * Returns 0 - 6 (Sunday - Saturday).
     */
    public static GetDayOfWeek_ZeroBased(date: Date): number
    {
        let dayOfWeek = date.getDay();
        return dayOfWeek;
    }

    /**
     * The getDay() method wackily returns the day-of-the-week, not the day of the month, while getDate() returns the day of the month.
     * The getDay() method is also zero-based.
     * Returns 1 - 7 (Sunday - Saturday).
     */
    public static GetDayOfWeek_OneBased(date: Date): number
    {
        let dayOfWeek = DateHelper.GetDayOfWeek_ZeroBased(date) + 1;
        return dayOfWeek;
    }

    /**
     * Returns 1 - 7 (Sunday - Saturday).
     */
    public static GetDayOfWeek(date: Date): number
    {
        let dayOfWeek = DateHelper.GetDayOfWeek_OneBased(date);
        return dayOfWeek;
    }

    /**
     * The getHours() method returns 0 to 23.
     * Returns 0 - 23.
     */
    public static GetHours24(date: Date): number
    {
        let hours24 = date.getHours();
        return hours24;
    }

    /**
     * The getHours() method returns 0 to 23.
     * Returns 0 - 12, works in conjunction with GetAmOrPm().
     */
    public static GetHours12(date: Date): number
    {
        let hour = DateHelper.GetHours24(date);

        let hour12 = hour > 12 ? hour - 12 : hour;
        return hour12;
    }

    public static GetAmOrPm(date: Date): string
    {
        let hour = DateHelper.GetHours24(date);

        let amPm = hour < 12 ? "AM" : "PM";
        return amPm;
    }

    public static ToStringMDYYYYHHMM_AMPM(date: Date): string
    {
        let day = DateHelper.GetDayOfMonth(date);
        let month = DateHelper.GetMonth(date);
        let year = date.getFullYear();
        let hour12 = DateHelper.GetHours12(date);
        let amPm = DateHelper.GetAmOrPm(date);
        let minute = date.getMinutes();

        let mdyyyyhhmm_ampm = `${month}/${day}/${year} ${NumberHelper.ToStringDD(hour12)}:${NumberHelper.ToStringDD(minute)} ${amPm}`;
        return mdyyyyhhmm_ampm;
    }

    public static GetElapsedTimeSpan(newerDate: Date, olderDate: Date)
    {
        let newerMillisecondsCount = newerDate.getTime();
        let olderMillisecondsCount = olderDate.getTime();

        let elapsedMilliseconds = newerMillisecondsCount - olderMillisecondsCount;

        let elapsedTimeSpan = TimeSpanHelper.ToTimeSpan(elapsedMilliseconds);
        return elapsedTimeSpan;
    }

    public static GetElapsedTimeSpanSinceDate(date: Date)
    {
        let now = DateHelper.Now();

        let elapsedTimeSpan = DateHelper.GetElapsedTimeSpan(now, date);
        return elapsedTimeSpan;
    }
}