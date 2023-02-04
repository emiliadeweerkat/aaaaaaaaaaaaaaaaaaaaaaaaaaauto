let afstand = 0
DFRobotMaqueenPlusV2.I2CInit()
DFRobotMaqueenPlusV2.showColor(NeoPixelColors.Violet)
basic.forever(function () {
    afstand = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
})
basic.forever(function () {
    basic.showNumber(afstand)
})
basic.forever(function () {
    if (afstand < 15 && afstand != 0) {
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
        basic.pause(1000)
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
    } else {
    	
    }
})
basic.forever(function () {
    if (afstand < 15 && afstand != 0) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eBackward, 50)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 50)
        basic.pause(200)
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
    }
})
basic.forever(function () {
    if (afstand < 15 && afstand != 0) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
