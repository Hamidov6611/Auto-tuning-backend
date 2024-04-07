import winston from 'winston';
export declare const winstonConfig: {
    level: string;
    format: winston.Logform.Format;
    transports: (winston.transports.ConsoleTransportInstance | winston.transports.FileTransportInstance)[];
};
