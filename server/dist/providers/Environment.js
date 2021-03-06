"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
class Env {
    static get() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const env = process.env.NODE_ENV;
        const prodUrl = process.env.PROD_URL;
        const devClientUrl = process.env.DEV_CLIENT_URL;
        const devServerUrl = process.env.DEV_SERVER_URL;
        const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devClientUrl;
        const port = process.env.PORT;
        const mongooseUrl = process.env.MONGOOSE_URL;
        const googleClientId = process.env.GOOGLE_ID;
        const googleSecret = process.env.GOOGLE_SECRET;
        const tokenSecret = process.env.TOKEN_SECRET;
        const sendGridSecret = process.env.SENDGRID_API_KEY;
        const sessionSecret = process.env.SESSION_SECRET;
        const logDays = process.env.LOG_DAYS || 10;
        const queueMonitor = process.env.QUEUE_HTTP_ENABLED || true;
        const queueMonitorHttpPort = process.env.QUEUE_HTTP_PORT || 5550;
        const redisHttpPort = process.env.REDIS_QUEUE_PORT || 6379;
        const redisHttpHost = process.env.REDIS_QUEUE_HOST || '127.0.0.1';
        const redisPrefix = process.env.REDIS_QUEUE_DB || 'q';
        const redisDB = process.env.REDIS_QUEUE_PREFIX || 3;
        return {
            baseUrl,
            sendGridSecret,
            googleClientId,
            googleSecret,
            env,
            tokenSecret,
            sessionSecret,
            logDays,
            mongooseUrl,
            port,
            redisDB,
            redisHttpPort,
            redisHttpHost,
            redisPrefix,
            prodUrl,
            devClientUrl,
            devServerUrl,
            queueMonitor,
            queueMonitorHttpPort
        };
    }
}
exports.default = Env;
//# sourceMappingURL=Environment.js.map