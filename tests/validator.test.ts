import type { Order, User } from "../src/models";
import { validateOrder, validateUser } from "../src/services/validator";

describe("User Validation", () => {
	it("should return zero errors for valid users", () => {
		const users: User[] = [
			{
				id: 1,
				name: "Arwa",
				email: "arwa@gmail.com",
				role: "admin",
				createdAt: "2020-09-09",
			},
		];
		const result = validateUser(users);
		expect(result.length).toBe(0);
	});

	it("should return errors for invalid user data", () => {
		const users: User[] = [
			{
				id: 3,
				name: "",
				email: "invalidemail",
				role: "user",
				createdAt: "2024-01-01",
			},
		];
		const result = validateUser(users);
		expect(result.length).toBe(1);
	});
});

describe("Order Validation", () => {
	it("should return zero errors for valid orders with existing users", () => {
		const orders: Order[] = [
			{ id: 1, userId: 1, amount: 20, status: "Paid", createdAt: "2020-09-09" },
		];
		const users: User[] = [
			{
				id: 1,
				name: "Doe",
				email: "doe@gmail.com",
				role: "user",
				createdAt: "2020-09-09",
			},
		];
		const result = validateOrder(orders, users);
		expect(result.length).toBe(0);
	});

	it("should return an error if an order's userId does not exist in users", () => {
		const orders: Order[] = [
			{
				id: 2,
				userId: 99,
				amount: 50,
				status: "Pending",
				createdAt: "2020-09-09",
			},
		];
		const users: User[] = [
			{
				id: 1,
				name: "AB",
				email: "ab@gmail.com",
				role: "user",
				createdAt: "2020-09-09",
			},
		];
		const result = validateOrder(orders, users);

		expect(result.length).toBe(1);
		expect(result[0]?.errors).toContain("userId does not exist in users array");
	});
});
