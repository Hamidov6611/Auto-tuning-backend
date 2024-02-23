import winston from 'winston';

export const winstonConfig = {
  level: 'info', // Loglash darajasi. Mavjud darajalar: error, warn, info, http, verbose, debug, silly
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }), // Xatolik stackini qo'shish
    winston.format.splat(), // String interpolation va splatting uchun
    winston.format.json(), // Loglarni JSON formatida saqlash
  ),
  transports: [
    // Konsolga loglash
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Log darajasiga qarab rang berish
        winston.format.simple(), // Oddiy formatda chiqarish (`${timestamp} ${level}: ${message}`)
      ),
    }),
    // Faylga loglash
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Faqat 'error' darajadagi loglar
    new winston.transports.File({ filename: 'combined.log' }), // Barcha loglar
  ],
};
