import fs from "fs";
import type { Order, User } from "../models";

export function loadData(filePath: string): { users: User[]; orders: Order[] } {
	const raw = fs.readFileSync(filePath, "utf-8");
	const data = JSON.parse(raw);
	if (!data.users || !data.orders) {
		throw new Error("JSON must contain users and orders arrays");
	}

	return {
		users: data.users,
		orders: data.orders,
	};
}
