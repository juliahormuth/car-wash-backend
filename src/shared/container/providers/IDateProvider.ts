
interface IDateProvider {
    addSimpleWash(start_wash: Date): Date;
    addFullWash(start_wash: Date): Date;
    addDetailedWash(start_wash: Date): Date;
    createDateNow(): Date;
    convertToBrazilianHour(start_wash: Date): Date;
}

export { IDateProvider }