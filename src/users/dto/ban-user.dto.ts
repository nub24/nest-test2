import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'Id пользователя' })
  readonly userId: number;
  @ApiProperty({
    example: 'Мат',
    description: 'Причина бана',
  })
  readonly banReason: string;
}
