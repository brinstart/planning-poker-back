import { Controller, Get } from '@nestjs/common'

import { ExampleService } from '@/modules/example/1.application/use-cases/example.service'

@Controller({
  path: 'example'
})
export class ExampleController {
  constructor (private readonly exampleService: ExampleService) {}

  @Get()
  getHello (): string {
    return this.exampleService.getHello()
  }
}
