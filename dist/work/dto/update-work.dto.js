"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_work_dto_1 = require("./create-work.dto");
class UpdateWorkDto extends (0, mapped_types_1.PartialType)(create_work_dto_1.CreateWorkDto) {
}
exports.UpdateWorkDto = UpdateWorkDto;
//# sourceMappingURL=update-work.dto.js.map