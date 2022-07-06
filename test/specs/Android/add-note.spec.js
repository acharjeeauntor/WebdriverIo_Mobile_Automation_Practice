describe('Add Notes', () => {

    let titelOfNote = "My Notes"
    let myNotes = "Pathrail\nDelduar\nTangail"

    it('skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    })

    it('add a note, save changes & verify done', async () => {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue(titelOfNote)
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue(myNotes)

        await driver.back()
        await driver.back()

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText(myNotes)
        await driver.back()

    })


    it('Delete a note & Verify the note in trash can ', async () => {
        
        await expect($(`//*[@text="${titelOfNote}"]`)).toBeDisplayed()
        await $(`//*[@text="${titelOfNote}"]`).click()
        await $('~More').click()
        await $('//*[@text="Delete"]').click()
        await $('//*[@resource-id="android:id/button1"]').click()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]')).not.toHaveText(titelOfNote)
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        await $('//*[@text="Trash Can"]').click()
        await expect($(`//*[@text="${titelOfNote}"]`)).toBeDisplayed()

    })

});