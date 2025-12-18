import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./interfaces/users.interface";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert.brown@example.com",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User not found with id ${id}`);
    }
    return user;
  }
}
