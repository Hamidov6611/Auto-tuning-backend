"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatalogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_catalog_dto_1 = require("./create-catalog.dto");
class UpdateCatalogDto extends (0, mapped_types_1.PartialType)(create_catalog_dto_1.CreateCatalogDto) {
}
exports.UpdateCatalogDto = UpdateCatalogDto;
//# sourceMappingURL=update-catalog.dto.js.map