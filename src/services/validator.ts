import type { Order, User } from "../models";

export interface validationError {
	type: "user" | "order";
	id: number | null;
	errors: string[];
}
export function validateEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function validateUser(users: User[]): validationError[] {
	const val_errors: validationError[] = [];

	users.forEach((user, index) => {
		const errors: string[] = [];
		if (typeof user.id !== "number") {
			errors.push("id must be a number");
		}
		if (!user.name || typeof user.name !== "string") {
			errors.push("name must be a non-empty string");
		}
		if (!user.email || !validateEmail(user.email)) {
			errors.push("invalid email");
		}
		if (!user.role || typeof user.role !== "string") {
			errors.push("role must be a non-empty string");
		}
		if (!user.createdAt || typeof user.createdAt !== "string") {
			errors.push("createdAt must be a non-empty string");
		}
		if (errors.length > 0) {
			val_errors.push({
				type: "user",
				id: user.id ?? index,
				errors: errors,
			});
		}
	});
	return val_errors;
}

export function validateOrder(
	orders: Order[],
	users: User[],
): validationError[] {
	const valErrors: validationError[] = [];
	orders.forEach((order, index) => {
		const errors: string[] = [];
		if (typeof order.id !== "number") {
			errors.push("id must be a number");
		}
		if (typeof order.userId !== "number") {
			errors.push("userId must be a number");
		}
		if (typeof order.amount !== "number") {
			errors.push("amount must be a number");
		}
		if (!["Pending", "Paid", "Cancelled"].includes(order.status)) {
			errors.push("invalid status");
		}
		if (!order.createdAt || typeof order.createdAt !== "string") {
			errors.push("createdAt must be a string");
		}
		const userExists = users.some((user) => user.id === order.userId);
		if (!userExists) {
			errors.push("userId does not exist in users array");
		}

		if (errors.length > 0) {
			valErrors.push({
				type: "order",
				id: order.id ?? index,
				errors,
			});
		}
	});
	return valErrors;
}
