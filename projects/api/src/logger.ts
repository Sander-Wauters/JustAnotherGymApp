import winston from "winston";

const { combine, timestamp, printf, colorize, align } = winston.format;

const cliFormat = combine(
  colorize({ all: true }),
  timestamp({
    format: "YYYY-MM-DD hh:mm:ss.SSS A",
  }),
  align(),
  printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
);
const fileFormat = combine(
  timestamp({
    format: "YYYY-MM-DD hh:mm:ss.SSS A",
  }),
  printf((info) => `${info.timestamp} ${info.level} ${info.message}`)
);

export const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  level: process.env.LOG_LEVEL || "warning",
  transports: [
    process.env.NODE_ENV === "development"
      ? new winston.transports.Console({ format: cliFormat })
      : new winston.transports.File({
          filename: "error.log",
          format: fileFormat,
        }),
  ],
});
