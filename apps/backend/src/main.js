import { __awaiter } from "tslib";
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as Express from 'express';
/** Note, bootstrapped from https://fireship.io/snippets/setup-nestjs-on-cloud-functions/ */
const serverApi = Express();
export const createNestServerApi = (expressInstance) => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
    return app.init();
});
createNestServerApi(serverApi)
    .then(() => console.log('Nest Ready'))
    .catch((err) => console.error('Nest broken', err));
switch (process.env.NODE_ENV) {
    case 'development': {
        console.log(`NODE_ENV=${process.env.NODE_ENV} `);
        break;
    }
    case 'production': {
        console.log(`NODE_ENV=${process.env.NODE_ENV} `);
        break;
    }
    default: {
        throw new Error(`Environment ${process.env.NODE_ENV} not handled. Please set NODE_ENV to a valid value.`);
    }
}
export const api = serverApi;
//# sourceMappingURL=main.js.map