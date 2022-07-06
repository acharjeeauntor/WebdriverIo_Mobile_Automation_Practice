describe('Android element test practice', () => {
    it('Find element by accessibility ID', async () => {
        const contentOption = await $('~App')
        await contentOption.click()
        const assetsOption = await $('~Alarm')
        await expect(assetsOption).toHaveText('Alarm')
    })

    it('Find element by Class Name', async () => {
        const className = await $('android.widget.TextView')
        const text = await className.getText()
        expect(text).toBe('API Demos')

    })

    it('Find element by Xpath', async () => {

        // xpath using content-desc
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
        // xpath using resource-id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
        // xpath using text
        await $('//android.widget.TextView[@text="Command two"]').click()
        // Find by class/tagname - assertion
        const textAssertion = await $('//android.widget.TextView')
        await expect(textAssertion).toHaveTextContaining('Command two')

    })


    it('Find element by Android UIAutomator', async () => {
        // Find by text
        await $('android=new UiSelector().text("App")').click()
        // Find by textContains
        await $('android=new UiSelector().textContains("Alert")').click()
        // Find by resourceId
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/radio_button")').click()
        // Find by resourceId,checked
        const choicedItemNameSelector = await $('android=new UiSelector().resourceId("android:id/text1").checked(true)')
        await expect(choicedItemNameSelector).toHaveText('Map')


    })

    it('Find multiple element', async () => {
        let expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views']
        let actualList = []
        const textList = await $$('android.widget.TextView')

        for (const element of textList) {
            actualList.push(await element.getText())
        }
        expect(actualList).toEqual(expectedList)
    })


    it('Enter input in a autocomplete input field', async () => {
        let countryName = 'Bangladesh'
        await $('//android.widget.TextView[@content-desc="Views"]').click()
        await $('//*[@text="Auto Complete"]').click()
        await $('android=new UiSelector().description("1. Screen Top")').click()

        const inputField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await inputField.addValue(countryName)
        await expect(inputField).toHaveText(countryName)
    })

})


