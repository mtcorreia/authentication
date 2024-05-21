import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthGuard],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('Teste para verificar se o controlador está definido', () => {
    expect(controller).toBeDefined();
  });

  it('Teste para verificar se a rota protegida retorna a mensagem esperada', () => {
    const result = controller.protectedRoute();
    expect(result).toEqual({ message: 'Rogério esteve aqui!!' });
  });
});
