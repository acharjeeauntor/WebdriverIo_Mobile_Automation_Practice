const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");

describe('Android Native Feature tests', () => {
    it("Access an activity directly", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        await driver.pause(3000)

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it.only("Working with Dialog Boxs", async () => {

        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()

        // Get Alert text
        console.log(await driver.getAlertText())

        // Accept Alert
        await driver.acceptAlert()

        // Dismiss Alert
        await driver.dismissAlert()

        // Click on Ok button
        await $('//*[@resource-id="android:id/button1"]').click()

        // Click on CANCEL button
        await $('//*[@resource-id="android:id/button2"]').click()

        // Alert text non longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()

    })


});