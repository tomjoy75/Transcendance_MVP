/**
 * @file employeeController.ts
 * Contrôleur REST pour les employés.
 * Fournit les routes pour créer et récupérer des employés via les décorateurs `@Get` et `@Post`.
 */
import { Controller } from "../core/mvc/controller";
import { Get, Post } from "../core/mvc/action";
import { Model } from "../core/mvc/model";
import { CreateEmployeeModel } from "../models/createEmployeeModel";

/**
 * Classe `EmployeeController`.
 * Gère les actions liées aux employés (récupération et création).
 * Utilise un repository en mémoire pour le stockage.
 */
@Controller
export class EmployeeController {

	/**
	 * Méthode `getAll`.
	 * Récupère tous les employés enregistrés.
	 * @returns Un tableau d’objets `Employee`.
	 */
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

	/**
	 * Méthode `create`.
	 * Crée un nouvel employé à partir du modèle validé.
	 * @param model - Données de l'employé à créer.
	 * @returns L'employé nouvellement ajouté.
	 */
	@Post
	@Model(CreateEmployeeModel)
	async post(model: CreateEmployeeModel): Promise<void> {
		console.table(model);
		return Promise.resolve();
	}
}