import { describe, it, expect, vi } from "vitest";
import moment from "moment-timezone";
import {
  timezoneValueFormatter,
  getTimeZoneAbbr,
  shortTimeDispaly,
} from "./timezoneUtils";

describe("timezoneUtils", () => {
  describe("timezoneValueFormatter", () => {
    it("should format the date correctly for the given timezone", () => {
      const formatter = timezoneValueFormatter("America/New_York");
      const params = { value: "2023-10-01T12:00:00Z", node: { group: false } };
      const result = formatter(params);
      expect(result).toBe("2023-10-01 08:00:00");
    });
  });

  describe("getTimeZoneAbbr", () => {
    it("should return the correct timezone abbreviation", () => {
      const abbr = getTimeZoneAbbr();
      const expectedAbbr = moment.tz(moment.tz.guess()).format("z");
      expect(abbr).toBe(expectedAbbr);
    });

    it("should return 'UTC' if the timezone abbreviation is not found", () => {
      vi.spyOn(moment.tz, "guess").mockReturnValue("Invalid/Timezone");
      const abbr = getTimeZoneAbbr();
      expect(abbr).toBe("UTC");
    });
  });

  describe("shortTimeDispaly", () => {
    it("should format the time correctly for the same day", () => {
      const time = moment().utc().format();
      const result = shortTimeDispaly(time, "America/New_York");
      const expected = moment
        .utc(time)
        .tz("America/New_York")
        .format("HH:mm:ss");
      expect(result).toBe(expected);
    });

    it("should format the time correctly for the same year", () => {
      const time = moment().subtract(1, "month").utc().format();
      const result = shortTimeDispaly(time, "America/New_York");
      const expected = moment
        .utc(time)
        .tz("America/New_York")
        .format("MMM DD HH:mm:ss");
      expect(result).toBe(expected);
    });

    it("should format the time correctly for a different year", () => {
      const time = moment().subtract(1, "year").utc().format();
      const result = shortTimeDispaly(time, "America/New_York");
      const expected = moment
        .utc(time)
        .tz("America/New_York")
        .format("YYYY-MM-DD HH:mm:ss");
      expect(result).toBe(expected);
    });
  });
});
