/* eslint-disable @typescript-eslint/no-explicit-any */
import * as dotenv from 'dotenv';
import winston from 'winston';

export class AppInitialization {
  private static _instance: AppInitialization;
  public readonly logger: winston.Logger;

  public static instance(): AppInitialization {
    if (AppInitialization._instance === undefined) {
      AppInitialization._instance = new AppInitialization();
    }
    return AppInitialization._instance;
  }

  private constructor() {
    dotenv.config();

    const {combine, timestamp, printf, colorize, align} = winston.format;
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL ?? 'info',
      format: combine(
        colorize({all: process.env.LOG_OUTPUT_COLORIZE !== 'false'}),
        timestamp({
          format:
            process.env.LOG_TIMESTAMP_FORMAT ?? 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf(
          (info: any) =>
            `[${info.timestamp}] ${info.level}-${info.scope ?? 'default'}: ${
              info.message
            }`,
        ),
      ),
      transports: [new winston.transports.Console()],
    });
  }

  public getLogger(scope: string): winston.Logger {
    return this.logger.child({scope});
  }
}
