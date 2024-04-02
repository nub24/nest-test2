import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Administrator', description: 'Роль' })
  readonly value: string;
  @ApiProperty({
    example: 'Администратор проекта',
    description: 'Описание роли',
  })
  readonly description: string;
}
