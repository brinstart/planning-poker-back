import { Test, type TestingModule } from '@nestjs/testing'

import { ExampleService } from '@/modules/example/1.application/use-cases/example.service'
import { ExampleController } from '@/modules/example/2.presentation/controllers/example.controller'

describe('ExampleController', () => {
  let exampleController: ExampleController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [ExampleService]
    }).compile()

    exampleController = app.get<ExampleController>(ExampleController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(exampleController.getHello()).toBe('Hello World!')
    })
  })
})
