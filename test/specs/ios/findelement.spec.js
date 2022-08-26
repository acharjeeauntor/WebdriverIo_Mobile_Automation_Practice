describe('Ios Test', () => {
    it(`Practice 1`,async()=>{
        const chainSelector='**/XCUIElementTypeStaticText[`label == "Default"`]'
        const predicateSelector='type == "XCUIElementTypeSearchField"'
        await $('~Search').click()
        await $(`-ios class chain:${chainSelector}`).click()
        await $(`-ios predicate string:${predicateSelector}`).setValue("My name is Auntor")
        expect(await $(`-ios predicate string:${predicateSelector}`)).toHaveAttr("value")
        await $(`//XCUIElementTypeButton[@name="Clear text"]`).click()
        //expect(await $(`-ios predicate string:${predicateSelector}`)).not.toContain("My name is Auntor")
        expect(await $(`-ios predicate string:${predicateSelector}`)).not.toHaveAttr("value")
   
    })

    it.only(`Practice Scrolling and picker view`,async()=>{

        // Normal Up,Down scrolling
        await driver.execute('mobile: scroll',{direction:"down"})
        await driver.execute('mobile: scroll', { direction: "up" })

        // For Picker View (UP,Down) with separate elementId
        await $('~Picker View').click()
        const redComponentLocator = await $('~Red color component value')
        const greenComponentLocator = await $('~Green color component value')
        const blueComponentLocator = await $('~Blue color component value')

        await driver.execute('mobile: scroll',{element:redComponentLocator.elementId ,direction:"down"})
        await driver.execute('mobile: scroll', {element:greenComponentLocator.elementId , direction: "up" })
        await driver.execute('mobile: scroll', {element:blueComponentLocator.elementId , direction: "down" })


        // For Perticular value in Picker View:
        redComponentLocator.addValue("125")
        greenComponentLocator.addValue("0")
        blueComponentLocator.addValue("125")

        await driver.pause(5000)

    })
});