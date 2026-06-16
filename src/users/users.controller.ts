import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

interface User {
  id: string;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: '1', name: 'Juan', email: 'juan@gmail.com' },
    { id: '2', name: 'Maria', email: 'Maria@gmail.com' },
    { id: '3', name: 'Pedro', email: 'Pedro@gmail.com' },
    { id: '4', name: 'Luis', email: 'Luis@gmail.com' },
    { id: '5', name: 'Ana', email: 'Ana@gmail.com' },
    { id: '6', name: 'Jose', email: 'Jose@gmail.com' },
    { id: '7', name: 'Maria', email: 'Maria@gmail.com' },
    { id: '8', name: 'Pedro', email: 'Pedro@gmail.com' },
    { id: '9', name: 'Luis', email: 'Luis@gmail.com' },
    { id: '10', name: 'Ana', email: 'Ana@gmail.com' },
  ];

  @Get()
  getUsers() {
    return this.users;
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return {
        error: 'User not found',
      };
    }

    return user;
  }

  @Post()
  createUser(@Body() body: User) {

    const newUser = {
      ...body,
      id: `${new Date().getTime()}`,
    };

    /* const newId = this.users.length > 0 ? Math.max(...this.users.map(u => Number(u.id))) + 1 : 1;
    const newUser = { ...body, id: newId.toString() }; */

    this.users.push(newUser);
    return newUser;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const position = this.users.findIndex((user) => user.id === id);

    if (position === -1) {
      return {
        error: 'User not found',
      }
    }

    this.users.splice(position, 1);

    return {
      message: 'User deleted',
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: User) {
    const position = this.users.findIndex((user) => user.id === id);

    if (position === -1) {
      return {
        error: 'User not found',
      }
    }

    const currentData = this.users[position];
    const updatedUser = {
      ...currentData,
      ...changes,
    }

    this.users[position] = updatedUser;

    return updatedUser;
  }
}
