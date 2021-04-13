import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInDays(start_date: Date, end_date: Date): number {
    return dayjs(this.convertToUTC(end_date)).diff(
      this.convertToUTC(start_date),
      "days"
    );
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  addDays(days: number, reference_date: Date = null): Date {
    const date = reference_date 
      ? dayjs(reference_date) 
      : dayjs();
    return date.add(days, "day").toDate()
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  compareInHours(start_date: Date, end_date: Date): number {
    return dayjs(this.convertToUTC(end_date)).diff(
      this.convertToUTC(start_date),
      "hours"
    );
  }
}

export { DayjsDateProvider };
