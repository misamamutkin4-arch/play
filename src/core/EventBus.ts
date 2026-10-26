import Phaser from 'phaser';

export const EventBus = new Phaser.Events.EventEmitter();

export const GameEvents = {
  LEVEL_START: 'level:start',
  LEVEL_COMPLETE: 'level:complete',
  LEVEL_RESTART: 'level:restart',
  HERO_DIED: 'hero:died',
  SPARK_COLLECTED: 'spark:collected',
  CHECKPOINT_REACHED: 'checkpoint:reached',
  MODE_CHANGED: 'mode:changed',
} as const;
