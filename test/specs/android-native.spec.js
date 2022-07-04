describe('Android Native Feature tests', () => {
    it.only("Access an activity directly", async () => {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples")

        await driver.pause(3000)

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it("Working with Dialog Boxs", async () => {

        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples")

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()

        // Get Alert text
        console.log(await driver.getAlertText())

        // Accept Alert
        await driver.acceptAlert()

        // // Dismiss Alert
        // await driver.dismissAlert()

        // // Click on Ok button
        // await $('//*[@resource-id="android:id/button1"]').click()

        // // Click on CANCEL button
        // await $('//*[@resource-id="android:id/button2"]').click()

        // Alert text non longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()

    })


    it('Vertical Scrolling upto a specific Text ', async () => {
        await $('~App').click()
        await $('~Activity').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Screen Orientation")').click()
        await expect($('//*[@resource-id="android:id/text1"]')).toExist()
    })

    it('Horizontal Scrolling', async () => {
        await $('~Views').click()
        await $('~Gallery').click()
        await $('~1. Photos').click()

        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

        await driver.pause(3000)
    })


});