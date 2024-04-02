import { ApiProperty } from '@nestjs/swagger';

export class AddroleDto {
  @ApiProperty({ example: 'Administrator', description: 'Значение роли' })
  readonly value: string;
  @ApiProperty({
    example: '5',
    description: 'Id пользователя, которому добавляется роль',
  })
  readonly userId: number;
}
