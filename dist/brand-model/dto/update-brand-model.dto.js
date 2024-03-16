"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandModelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_brand_model_dto_1 = require("./create-brand-model.dto");
class UpdateBrandModelDto extends (0, mapped_types_1.PartialType)(create_brand_model_dto_1.CreateBrandModelDto) {
}
exports.UpdateBrandModelDto = UpdateBrandModelDto;
//# sourceMappingURL=update-brand-model.dto.js.map