/* eslint-disable @typescript-eslint/no-extraneous-class */
import * as dotenv from 'dotenv';

export class AppInitialization {
  private static _instance: AppInitialization;

  public static instance(): AppInitialization {
    if (AppInitialization._instance === undefined) {
      AppInitialization._instance = new AppInitialization();
    }
    return AppInitialization._instance;
  }

  private constructor() {
    dotenv.config();
  }
}
