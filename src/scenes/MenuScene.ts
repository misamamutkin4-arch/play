import Phaser from 'phaser';
import { PlatformService } from '../platform/PlatformService';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create(): void {
    const { width, height } = this.scale;
    const platform = PlatformService.getInstance();

    this.add
      .text(width / 2, height / 2 - 40, 'TETHER', {
        fontSize: '52px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    const statusText = platform.isTelegram ? 'Внутри Telegram' : 'В обычном браузере';
    this.add
      .text(width / 2, height / 2 + 20, `Режим: ${statusText}`, {
        fontSize: '22px',
        color: '#ffd95a',
      })
      .setOrigin(0.5);

    const btn = this.add
      .text(width / 2, height / 2 + 90, 'НАЖМИ МЕНЯ', {
        fontSize: '24px',
        color: '#ffffff',
        backgroundColor: '#e5484d',
        padding: { x: 24, y: 12 },
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    btn.on('pointerdown', () => {
      platform.haptic();
      btn.setScale(0.95);
    });

    btn.on('pointerup', () => {
      btn.setScale(1.0);
    });
  }
}
