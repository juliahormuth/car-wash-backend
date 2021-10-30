import { container } from "tsyringe";
import { IDateProvider } from "./IDateProvider";
import { DateProvider } from "./DateProvider";


container.registerSingleton<IDateProvider>(
    "DateProvider",
    DateProvider
)