export class PlatformService {
  private static instance: PlatformService;
  public readonly isTelegram: boolean;
  private tg: any = null;

  private constructor() {
    this.isTelegram = typeof window !== 'undefined' && Boolean((window as any).Telegram?.WebApp?.initData);
    if (this.isTelegram) {
      this.tg = (window as any).Telegram.WebApp;
      this.tg.ready();
      this.tg.expand();
    }
  }

  public static getInstance(): PlatformService {
    if (!PlatformService.instance) {
      PlatformService.instance = new PlatformService();
    }
    return PlatformService.instance;
  }

  public haptic(): void {
    if (this.isTelegram && this.tg?.HapticFeedback) {
      this.tg.HapticFeedback.impactOccurred('medium');
    } else if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  }
}
