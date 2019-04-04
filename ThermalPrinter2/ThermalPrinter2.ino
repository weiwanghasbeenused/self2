#include <Adafruit_Thermal.h>
#include "SoftwareSerial.h"

// Maximum width of monochrome 1-bit images = 384 pixels
// Source image does not need to be in BMP format

// Mini printer Printer Data Cable
// Black = Ground
// Yellow = Data IN to the printer
// Green = Data OUT of the printer

#define RX_PIN 5 // Arduino receive   GREEN WIRE   labeled TX on printer
#define TX_PIN 6 // Arduino transmit  YELLOW WIRE  labeled RX on printer
#define switchPin 10
#define resetBtn 11
#define printBtn 12


int resetBtnState = 0;
int printBtnState = 0;
int switchState = 0;
int prevResetBtnState = 0;
int prevPrintBtnState = 0;
int prevSwitchState = 0;

SoftwareSerial mySerial(RX_PIN, TX_PIN); // Declare SoftwareSerial obj first
Adafruit_Thermal printer(&mySerial);     // Pass addr to printer constructor

int heatTime = 80;
int heatInterval = 255;
char printDensity = 15;
char printBreakTime = 15;

String inputString = "";         // a String to hold incoming data
bool stringComplete = false;  // whether the string is complete


void setup() {
  // put your setup code here, to run once:
  pinMode(resetBtn, INPUT_PULLUP);
  pinMode(printBtn, INPUT_PULLUP);
  pinMode(switchPin, INPUT_PULLUP);
  Serial.begin(19200); // USB Serial
  mySerial.begin(19200); // Printer Serial
  printer.begin();

  // reserve 200 bytes for the inputString:
  inputString.reserve(2000);
  // initialize printer settings
  initPrinter();

  printer.doubleHeightOn();
  printer.println(inputString);
  printer.feed(2);
  printer.doubleHeightOff();printer.println("Find your portrait on IG");
  printer.println("@selfportraitxd");
  printer.println("Make more portraits @");
  printer.println("wei-haowang.com/XD/selfPortrait/selfPortrait.html");
  printer.feed(6);


}

void loop() {
  // put your main code here, to run repeatedly:
  resetBtnState = digitalRead(resetBtn);
  printBtnState = digitalRead(printBtn);
  switchState = digitalRead(switchPin);

  if (printBtnState == LOW) {
      Serial.println("S");
      delay(1000);
  }


  if (resetBtnState == LOW) {
      Serial.println('A');
      delay(500);
  }

  // Print switch state only once
  if (switchState != prevSwitchState) {
    //Serial.println("The switch changed");
    if (switchState == LOW) {
      Serial.println("W");
    } else if (switchState == HIGH) {
      Serial.println("D");
    }
    delay(100);
  }

  prevSwitchState = switchState;

  // print the string when a newline arrives:
  if (stringComplete) {
    printMessage();
    Serial.println("String Complete");
    // clear the string:
    inputString = "";
    stringComplete = false;
  }


}

// Called when data is available. Currently not compatible with the Leonardo
void serialEvent() {
  while (Serial.available() > 0) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag so the main loop can
    // do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}


void printMessage() {
  // Test character double-height on & off
  printer.doubleHeightOn();
  printer.println(inputString);
  printer.feed(2);
  printer.doubleHeightOff();printer.println("Find your portrait on IG");
  printer.println("@selfportraitxd");
  printer.println("Make more portraits @");
  printer.println("wei-haowang.com/XD/selfPortrait/selfPortraiting.html");
  printer.feed(6);
}

void initPrinter() {
 //Modify the print speed and heat
 printer.write(27);
 printer.write(55);
 printer.write(7); //Default 64 dots = 8*('7'+1)
 printer.write(heatTime); //Default 80 or 800us
 printer.write(heatInterval); //Default 2 or 20us
 //Modify the print density and timeout
 printer.write(18);
 printer.write(35);
 int printSetting = (printDensity<<4) | printBreakTime;
 printer.write(printSetting); //Combination of printDensity and printBreakTime
 Serial.println();
 Serial.println("Printer ready");
}
