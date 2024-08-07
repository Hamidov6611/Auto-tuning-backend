"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkModule = void 0;
const common_1 = require("@nestjs/common");
const work_service_1 = require("./work.service");
const work_controller_1 = require("./work.controller");
const typeorm_1 = require("@nestjs/typeorm");
const work_entity_1 = require("./entities/work.entity");
const file_service_1 = require("../file/file.service");
const tag_entity_1 = require("../tag/entities/tag.entity");
let WorkModule = class WorkModule {
};
exports.WorkModule = WorkModule;
exports.WorkModule = WorkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([work_entity_1.Work, tag_entity_1.Tag])],
        controllers: [work_controller_1.WorkController],
        providers: [work_service_1.WorkService, file_service_1.FileService],
    })
], WorkModule);
//# sourceMappingURL=work.module.js.map