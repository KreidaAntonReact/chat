import type { IEventBas } from '@/lib';
import type { TEventMap } from '@packages/types';

export class EventBas implements IEventBas {
  static instance: EventBas;

  constructor(private readonly events: {[K in keyof TEventMap]: Array<(data: TEventMap[K]) => void>} = {
    'change-router': [],
    'change-filter-chats': [],
    'change-chats': []
  }) {}

  public on<K extends keyof TEventMap>(event: K, callback: (data: TEventMap[K]) => void){
    if(!this.events[event]) {
      (this.events[event] as Array<(data: TEventMap[K]) => void>) = [callback];
      return;
    }

    this.events[event].push(callback);
  }

  public emit<K extends keyof TEventMap>(event: K, data: TEventMap[K]): void {
    this.events[event]?.forEach((callback) => callback(data));
  }


  static getInstance() {
    return this.instance || (this.instance = new EventBas());
  }
}
