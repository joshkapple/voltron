import { Controller, Get } from '@nestjs/common';

@Controller('foo')
export class ApiController {
  @Get()
  test(): string {
    return "i'm a test ddddof api !";
  }
}
