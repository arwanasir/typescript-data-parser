import { validateUser,validateOrder } from "../src/services/validator";
import { Order, User } from "../src/models";

describe("User Validation", () => {
  it("should keep only valid users", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Arwa",
        email: "arwa@gmail.com",
        role: "admin",
        createdAt: "2020-09-09",
      }
    ];

    const result = validateUser(users);
    expect(result.length).toBe(1);
  });

  it("should return an empty array if all users are invalid", () => {
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

    expect(result.length).toBe(0);
  });
});

describe("Order Validation", () => {
  it("should keep only valid orders", () => {
    const orders: Order[] = [
      {
        id: 1,
        userId: 1,
        amount: 20,
        status: "Paid",
        createdAt: "2020-09-09",
      }
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

    expect(result.length).toBe(1);
   
  });

  it("should return an empty array if no orders are valid", () => {
    const orders: Order[] = [
      {
        id: 2,
        userId: 99, // non-existent user
        amount: -50, // negative amount
        status: "Pending",
        createdAt: "invalid-date",
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

    expect(result.length).toBe(0);
  });
});
