"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateParsingCarDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_parsing_car_dto_1 = require("./create-parsing_car.dto");
class UpdateParsingCarDto extends (0, mapped_types_1.PartialType)(create_parsing_car_dto_1.CreateParsingCarDto) {
}
exports.UpdateParsingCarDto = UpdateParsingCarDto;
//# sourceMappingURL=update-parsing_car.dto.js.map