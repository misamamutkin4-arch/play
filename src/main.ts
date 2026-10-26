import Phaser from 'phaser';
import { MenuScene } from './scenes/MenuScene';
import balance from './data/balance.json';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  backgroundColor: '#1b1b1f',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: balance.physics.gravity / 1000 },
      debug: true,
      runner: {
        isFixed: true,
        fps: balance.physics.fps,
      },
    },
  },
  scene: [MenuScene],
};

new Phaser.Game(config);
