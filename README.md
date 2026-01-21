# react-native-bluetooth-escpos-printer

> 🔀 **This is a fork of [januslo/react-native-bluetooth-escpos-printer](https://github.com/januslo/react-native-bluetooth-escpos-printer)**

React-Native plugin for the bluetooth ESC/POS & TSC printers.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/januslo/react-native-bluetooth-escpos-printer/master/LICENSE) [![npm version](https://badge.fury.io/js/react-native-bluetooth-escpos-printer.svg)](https://www.npmjs.com/package/react-native-bluetooth-escpos-printer)

---

## 📝 What's Changed in This Fork

This fork includes several updates and fixes for modern React Native and Expo projects:

### Android Updates
- **Updated to AndroidX** - Migrated from deprecated `android.support.v4` to AndroidX
- **Updated compileSdk to 34** - Compatible with latest Android SDK
- **Added androidx.core dependency** - For ActivityCompat and ContextCompat
- **Updated build.gradle** - Fixed repository URLs to HTTPS and added Google Maven repository

### TypeScript Support
- **Added TypeScript definitions** (`index.d.ts`) - Full type coverage for all modules

### Bug Fixes
- **Fixed typo:** `unpaire` → `unpair` method name

### Tested With
- Expo SDK 54
- React Native 0.81.5
- Android compileSdk 34

---

## 📦 Installation

```bash
npm install github:ibnushahraa/react-native-bluetooth-escpos-printer
```

### For Expo Projects

Add Bluetooth permissions to `app.json`:

```json
"android": {
  "permissions": [
    "BLUETOOTH_CONNECT",
    "BLUETOOTH_SCAN"
  ]
}
```

Then rebuild:
```bash
npx expo run:android
```

---

## 🚀 Quick Example

```typescript
import {
  BluetoothManager,
  BluetoothEscposPrinter
} from 'react-native-bluetooth-escpos-printer';

// Check if bluetooth is enabled
const enabled = await BluetoothManager.isBluetoothEnabled();

// Enable bluetooth and get paired devices
const paired = await BluetoothManager.enableBluetooth();

// Connect to device
await BluetoothManager.connect(deviceAddress);

// Print receipt
await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
await BluetoothEscposPrinter.printText("MY STORE\n", {
  fontSize: 20,
  fontWeight: 1,
});
await BluetoothEscposPrinter.printText("================\n", {});

await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.LEFT);
await BluetoothEscposPrinter.printText("Date: " + new Date().toLocaleDateString() + "\n", {});
await BluetoothEscposPrinter.printText("Order #123\n", {});
await BluetoothEscposPrinter.printText("================\n", {});

// Print QR Code
await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
await BluetoothEscposPrinter.printQRCode(
  "https://example.com",
  250,
  BluetoothEscposPrinter.ERROR_CORRECTION.L
);

await BluetoothEscposPrinter.printText("\n\n\n", {});

// Unpair device
await BluetoothManager.unpair(deviceAddress);
```

---

## 📖 API Reference

### BluetoothManager

| Method | Description |
|---|---|
| `isBluetoothEnabled()` | Check if Bluetooth is enabled |
| `enableBluetooth()` | Enable Bluetooth and get paired devices (Android only) |
| `disableBluetooth()` | Disable Bluetooth (Android only) |
| `scanDevices()` | Scan for Bluetooth devices |
| `connect(address)` | Connect to device |
| `unpair(address)` | Unpair device |

### BluetoothEscposPrinter

| Method | Description |
|---|---|
| `printerInit()` | Initialize printer |
| `printerAlign(align)` | Set alignment (LEFT/CENTER/RIGHT) |
| `printText(text, options)` | Print text |
| `printQRCode(content, size, errorLevel)` | Print QR code |
| `printBarCode(...)` | Print barcode |
| `printColumn(...)` | Print in columns |
| `printPic(base64, options)` | Print image from base64 |

### BluetoothTscPrinter

| Method | Description |
|---|---|
| `printLabel(options)` | Print label with text, QR, barcode, and image |

---

## 📝 License

MIT License - see LICENSE file for details

---

## 🙏 Credits

Original library by [januslo](https://github.com/januslo)
