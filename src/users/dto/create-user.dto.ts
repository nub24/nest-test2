import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.ru', description: 'Электронная почта' })
  @IsString({ message: 'Поле email должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный адрес электронной почты' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'Пароль пользователя' })
  @IsString({ message: 'Поле password должно быть строкой' })
  @Length(6, 16, { message: 'Пароль должен быть длиной от 6 до 16 символов' })
  readonly password: string;
}
