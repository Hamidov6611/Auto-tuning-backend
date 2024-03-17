"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandYearDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_brand_year_dto_1 = require("./create-brand-year.dto");
class UpdateBrandYearDto extends (0, mapped_types_1.PartialType)(create_brand_year_dto_1.CreateBrandYearDto) {
}
exports.UpdateBrandYearDto = UpdateBrandYearDto;
//# sourceMappingURL=update-brand-year.dto.js.map