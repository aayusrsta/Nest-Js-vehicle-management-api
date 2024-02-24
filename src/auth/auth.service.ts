import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {


  private readonly users = [
    {
      userId: 1,
      username: 'aayu',
      password: 'Test@123',
    },
    {
      userId: 2,
      username: 'enigma',
      password: 'Test@123',
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );

    return user ? { userId: user.userId, username: user.username } : null;
  }

  async validateUserById(userId: number): Promise<any> {

    const user = this.users.find((u) => u.userId === userId);
    return user ? { userId: user.userId, username: user.username } : null;
  }
}
