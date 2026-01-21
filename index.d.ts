declare module 'react-native-bluetooth-escpos-printer' {
  export interface BluetoothDevice {
    name: string;
    address: string;
  }

  export const BluetoothManager: {
    isBluetoothEnabled(): Promise<boolean>;
    enableBluetooth(): Promise<string[]>;
    disableBluetooth(): Promise<void>;
    scanDevices(): Promise<string>;
    connect(address: string): Promise<void>;
    disconnect(address: string): Promise<string>;
    unpair(address: string): Promise<void>;
    isDeviceConnected(): Promise<boolean>;
    getConnectedDeviceAddress(): Promise<string>;
    EVENT_DEVICE_ALREADY_PAIRED: string;
    EVENT_DEVICE_DISCOVER_DONE: string;
    EVENT_DEVICE_FOUND: string;
    EVENT_CONNECTION_LOST: string;
    EVENT_UNABLE_CONNECT: string;
    EVENT_CONNECTED: string;
    EVENT_BLUETOOTH_NOT_SUPPORT: string;
  };

  export const BluetoothEscposPrinter: {
    printerInit(): Promise<void>;
    printAndFeed(feed: number): Promise<void>;
    printerLeftSpace(sp: number): Promise<void>;
    printerLineSpace(sp: number): Promise<void>;
    printerUnderLine(line: number): Promise<void>;
    printerAlign(align: number): Promise<void>;
    printText(text: string, options?: any): Promise<void>;
    printColumn(
      columnWidths: number[],
      columnAligns: number[],
      columnTexts: string[],
      options?: any
    ): Promise<void>;
    setWidth(width: number): Promise<void>;
    printPic(base64: string, options?: any): Promise<void>;
    selfTest(): Promise<void>;
    rotate(): Promise<void>;
    setBlob(weight: number): Promise<void>;
    printQRCode(content: string, size: number, correctionLevel: number): Promise<void>;
    printBarCode(
      str: string,
      nType: number,
      nWidthX: number,
      nHeight: number,
      nHriFontType: number,
      nHriFontPosition: number
    ): Promise<void>;
    ALIGN: {
      LEFT: number;
      CENTER: number;
      RIGHT: number;
    };
    ERROR_CORRECTION: {
      L: number;
      M: number;
      Q: number;
      H: number;
    };
    BARCODETYPE: {
      UPC_A: number;
      UPC_E: number;
      JAN13: number;
      JAN8: number;
      CODE39: number;
      ITF: number;
      CODABAR: number;
      CODE93: number;
      CODE128: number;
    };
    ROTATION: {
      OFF: number;
      ON: number;
    };
  };

  export const BluetoothTscPrinter: {
    printLabel(options: any): Promise<void>;
    DIRECTION: {
      FORWARD: number;
      BACKWARD: number;
    };
    DENSITY: {
      DNESITY0: number;
      DNESITY1: number;
      DNESITY2: number;
      DNESITY3: number;
      DNESITY4: number;
      DNESITY5: number;
      DNESITY6: number;
      DNESITY7: number;
      DNESITY8: number;
      DNESITY9: number;
      DNESITY10: number;
      DNESITY11: number;
      DNESITY12: number;
      DNESITY13: number;
      DNESITY14: number;
      DNESITY15: number;
    };
    BARCODETYPE: {
      CODE128: string;
      CODE128M: string;
      EAN128: string;
      ITF25: string;
      ITF25C: string;
      CODE39: string;
      CODE39C: string;
      CODE39S: string;
      CODE93: string;
      EAN13: string;
      EAN13_2: string;
      EAN13_5: string;
      EAN8: string;
      EAN8_2: string;
      EAN8_5: string;
      CODABAR: string;
      POST: string;
      UPCA: string;
      UPCA_2: string;
      UPCA_5: string;
      UPCE: string;
      UPCE_2: string;
      UPCE_5: string;
      CPOST: string;
      MSI: string;
      MSIC: string;
      PLESSEY: string;
      ITF14: string;
      EAN14: string;
    };
    FONTTYPE: {
      FONT_1: string;
      FONT_2: string;
      FONT_3: string;
      FONT_4: string;
      FONT_5: string;
      FONT_6: string;
      FONT_7: string;
      FONT_8: string;
      SIMPLIFIED_CHINESE: string;
      TRADITIONAL_CHINESE: string;
      KOREAN: string;
    };
    EEC: {
      LEVEL_L: string;
      LEVEL_M: string;
      LEVEL_Q: string;
      LEVEL_H: string;
    };
    ROTATION: {
      ROTATION_0: number;
      ROTATION_90: number;
      ROTATION_180: number;
      ROTATION_270: number;
    };
    FONTMUL: {
      MUL_1: number;
      MUL_2: number;
      MUL_3: number;
      MUL_4: number;
      MUL_5: number;
      MUL_6: number;
      MUL_7: number;
      MUL_8: number;
      MUL_9: number;
      MUL_10: number;
    };
    BITMAP_MODE: {
      OVERWRITE: number;
      OR: number;
      XOR: number;
    };
    PRINT_SPEED: {
      SPEED1DIV5: number;
      SPEED2: number;
      SPEED3: number;
      SPEED4: number;
    };
    TEAR: {
      ON: string;
      OFF: string;
    };
    READABLE: {
      DISABLE: number;
      EANBLE: number;
    };
  };
}
