import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto & import("./entities/category.entity").Category>;
    findAll(page: number, limit: number): Promise<{
        count: number;
        data: import("./entities/category.entity").Category[];
    }>;
    allCategory(): Promise<import("./entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("./entities/category.entity").Category | "This category not found">;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
