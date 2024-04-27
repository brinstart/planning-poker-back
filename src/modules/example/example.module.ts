import { Module } from '@nestjs/common'

import { ExampleService } from '@/modules/example/1.application/use-cases/example.service'
import { ExampleController } from '@/modules/example/2.presentation/controllers/example.controller'

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [ExampleService]
})

export class ExampleModule {}
