import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  @Get('protected')
  @UseGuards(AuthGuard)
  protectedRoute() {
    return { message: 'Rogério esteve aqui!!' };
  }
}
