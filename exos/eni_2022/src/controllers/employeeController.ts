import { Controller } from "../core/mvc/controller";
import { Get, Post } from "../core/mvc/action";
import { Model } from "../core/mvc/model";
import { CreateEmployeeModel } from "../models/createEmployeeModel";


@Controller
export class EmployeeController {
	
	@Get
	async getAll() {
		return [{
			id: "1",
			firstName: "Thomas A.",
			lastName: "Anderson",
			email: "tom@gmail.com",
			salary: 2000
		}];
	}

	@Post
	@Model(CreateEmployeeModel)
	async post(model: CreateEmployeeModel): Promise<void> {
		console.table(model);
		return Promise.resolve();
	}
}