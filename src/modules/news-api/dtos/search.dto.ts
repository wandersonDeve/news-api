import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class SearchDto {
  @ApiPropertyOptional({ default: 'spotify' })
  @IsOptional()
  @IsString()
  readonly search?: string = 'spotify';

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly page?: number = 1;
}
