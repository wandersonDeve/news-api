import { IsOptional } from 'class-validator';

export class SearchDto {
  @IsOptional()
  q: string;
}
