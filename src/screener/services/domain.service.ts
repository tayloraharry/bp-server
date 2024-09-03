import { Injectable } from '@nestjs/common';
import { DomainRepository } from '../repositories/domain.repository';
import { Domain } from '../schemas/domain.schema';

@Injectable()
export class DomainService {
  constructor(private readonly _domainRepository: DomainRepository) {}
  public async getDomains(): Promise<Domain[]> {
    const domains = await this._domainRepository.retrieve();

    return domains;
  }
}
