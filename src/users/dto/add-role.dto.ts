import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddroleDto {
  @ApiProperty({ example: 'Administrator', description: 'Значение роли' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;
  @ApiProperty({
    example: '5',
    description: 'Id пользователя, которому добавляется роль',
  })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
