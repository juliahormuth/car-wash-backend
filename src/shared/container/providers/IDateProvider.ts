

interface IDateProvider {
   /* compareInHours(start_date: Date, end_date: Date): number
    convertToUtc(date: Date): string
    dateNow(): Date
   */
  compareHours(start_date: Date)
}

export { IDateProvider }