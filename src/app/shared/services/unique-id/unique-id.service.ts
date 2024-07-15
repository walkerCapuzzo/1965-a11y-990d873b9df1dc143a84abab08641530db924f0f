import { Injectable } from "@angular/core";
import * as uuid from 'uuid';

@Injectable( { providedIn: 'root' })
export class UniqueIdService {

  public generateUniqueIdWithPrefix(prfix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prfix}-${uniqueId}`;
  }

  private generateUniqueId(): string {
    return uuid.v1();
  }
}
