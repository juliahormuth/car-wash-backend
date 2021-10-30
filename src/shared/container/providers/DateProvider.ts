import { IDateProvider } from "./IDateProvider";
import  dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

class DateProvider implements IDateProvider {
 
    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUtc(end_date)

        const start_date_utc = this.convertToUtc(start_date)

        return dayjs(end_date).diff(start_date, "hours")
    }

    convertToUtc(date: Date): string {
      return dayjs(date).utc().local().format()
    }
    
    dateNow(): Date {
        return dayjs().toDate();
    }
}




export { DateProvider }