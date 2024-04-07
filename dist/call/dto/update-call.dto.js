"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCallDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_call_dto_1 = require("./create-call.dto");
class UpdateCallDto extends (0, mapped_types_1.PartialType)(create_call_dto_1.CreateCallDto) {
}
exports.UpdateCallDto = UpdateCallDto;
//# sourceMappingURL=update-call.dto.js.map