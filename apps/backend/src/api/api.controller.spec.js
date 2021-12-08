import { __awaiter } from "tslib";
import { Test } from '@nestjs/testing';
import { ApiController } from './api.controller';
describe('FooController', () => {
    let controller;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield Test.createTestingModule({
            controllers: [ApiController],
        }).compile();
        controller = module.get(ApiController);
    }));
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=api.controller.spec.js.map