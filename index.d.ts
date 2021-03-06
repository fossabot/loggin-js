// Type definitions for loggin-js


export namespace Loggers {
  class ConsoleLogger extends Loggers.Logger {
    constructor(options: Loggers.Options);
  }

  class FileLogger extends Loggers.Logger {
    constructor(options: Loggers.Options);
  }

  class RemoteLogger extends Loggers.Logger {
    constructor(options: Loggers.Options);
  }

  class MemoryLogger extends Loggers.Logger {
    constructor(options: Loggers.Options);
  }

  class LoggerPack extends Loggers.Logger {
    constructor(options: Loggers.Options);
  }

  class Logger {
    constructor(notifier: Notifiers.Notifier, options: Loggers.Options);

    setEnabled(enabled: boolean);
    isEnabled(): boolean;

    setUser(user: string);
    getUser(): string;

    setChannel(channel: boolean);
    getChannel(): boolean;

    setLevel(level: number | string | Severity);
    getLevel(): Severity;

    setFormatter(str: string);
    getFormatter(): string;

    setColor(enable: boolean);
    getColor(): boolean;

    canLog(severity: Severity): boolean;

    showLineNumbers(show: boolean);

    /**
     * Log a message to set notifier
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     * @param level - level of the log
     * @param time - timestamp of the log
     * @param user - user who dispatched the log
     */
    log(
      message: string,
      data: any,
      level?: number | Severity,
      channel?: string,
      time?: Date | number | string,
      user?: string
    ): this;

    /**
     * @description Logs with severity set to DEBUG
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    debug(
      message: string,
      data?: any,
      channel?: any
    ): this;

    /**
     * @description Logs with severity set to WARNING
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    warning(
      message: string,
      data?: any,
      channel?: any
    ): this;

    /**
     * @description Logs with severity set to EMERGENCY
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    emergency(
      message: string,
      data?: any,
      channel?: any
    ): this;

    /**
     * @description Logs with severity set to CRITICAL
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    critical(
      message: string,
      data?: any,
      channel?: any
    ): this;

    /**
     * @description Logs with severity set to ERROR
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    error(
      message: string,
      data?: any,
      channel?: any
    ): this;

    /**
     * @description Logs with severity set to NOTICE
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    notice(
      message: string,
      data?: any,
      channel?: any
    ): this;


    /**
     * @description Logs with severity set to INFO
     * @param message - message to be logged
     * @param data - some data to log
     * @param channel - overwrite channel
     */
    info(
      message: string,
      data?: any,
      channel?: any
    ): this;
  }

  interface Options {
    color?: boolean;
    lineNumbers?: boolean;
    level?: number | string | Severity;
    user?: string;
    channel?: string;
    formatter?: string;
  }
}

/**
 * 
 */
export class Severity {
  constructor(level: number, name: string, englobes: Severity[], fileLogginLevel: Severity);



  static EMERGENCY: Severity;
  static ALERT: Severity;
  static CRITICAL: Severity;
  static ERROR: Severity;
  static WARNING: Severity;
  static NOTICE: Severity;
  static INFO: Severity;
  static DEBUG: Severity;
}

export namespace Notifiers {
  class ConsoleNotifier extends Notifiers.Notifier {

  }

  class FileNotifier extends Notifiers.Notifier {

  }

  class RemoteNotifier extends Notifiers.Notifier {

  }

  class MemoryNotifier extends Notifiers.Notifier {

  }

  class Notifier {
    constructor(options);
  }

  class Pipe {
    constructor();
  }
}

/**
 * Returns a logger based on options
 * 
 * #### Example 1
 * In the following example it will return a FileLogger as pipes are passed
 * @example 
 * logging.getLogger({ pipes: [ ... ] });
 */
export function getLogger(opts: Loggers.Options): Loggers.Logger;

/**
 * Packs a set of loggers and makes available a interface for managing both
 */
export function join(loggers: Loggers.Logger[], opts: Loggers.Options): Loggers.Logger;