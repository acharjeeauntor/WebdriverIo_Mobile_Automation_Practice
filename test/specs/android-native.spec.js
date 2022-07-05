describe('Android Native Feature tests', () => {
    it("Access an activity directly", async () => {
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
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1")
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

        await driver.pause(3000)
    })

    it.only('Select/update date', async () => {
        await $('~Views').click()
        await $('~Date Widgets').click()
        await $('//*[@content-desc="1. Dialog"]').click()
       const date= await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
       console.log(date)
       await $('~change the date').click()
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
       await $('//android.view.View[@content-desc="10 August 2022"]').click()
       await $('//*[@resource-id="android:id/button1"]').click()
       console.log(date)
       await expect(date).toContain("8-10-2022")

    })



});