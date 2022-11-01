const { format: formatTz } = require("date-fns-tz");

const dateFns = jest.createMockFromModule("date-fns");

const format = (date, format, options) => {
  return formatTz(date, format, { timeZone: "UTC", ...options });
};

dateFns.format = format;

module.exports = dateFns;
