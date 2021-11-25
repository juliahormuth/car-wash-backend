import { IDateProvider } from "./IDateProvider";
import  dayjs from 'dayjs'

class DateProvider implements IDateProvider {

  // Horários de acordo com cada Lavagem

  addSimpleWash(start_wash: Date): Date {
    return dayjs(start_wash).add(1, 'hour').toDate()
  }

  addFullWash(start_wash: Date): Date {
    return dayjs(start_wash).add(2, 'hour').toDate()
  }

  addDetailedWash(start_wash: Date): Date {
    return dayjs(start_wash).add(3, 'hour').toDate()
  }

  createDateNow(): Date {
    return dayjs().toDate()
  }

  convertToBrazilianHour(start_wash: Date): Date {
    return dayjs(start_wash).subtract(3, 'hour').toDate()
  }
}

export { DateProvider }