const locators = Object.freeze({
    heading: '.is-size-3',
    subHeading: '#sub_heading',
    paragraph: '#content',
    previousBtn: '#previous',
    nextBtn: '#next',
    infos: '.city_info, .country_info, .population_info',
    image: '.city_image'
})

class PaginationPage {
    locators = locators

    /**
     * 
     * @param {string} button text of the button that needs to be clicked.
     * clicks on the button with provided text 
     */
    async clickButton(button) {
        await this.getButtonLocator(button).click() 
    }

    /**
     * 
     * @param {*} button text of the button that needs to be clicked.
     * clicks on the button with provided text until it becomes disabled
     */
    async clickButtonTillDisabled(button) {
      let isEnabled = await this.getButtonLocator(button).isEnabled()

      while(isEnabled) {
      await this.clickButton(button)

      isEnabled = await this.getButtonLocator(button).isEnabled()
      }
    }

    /**
     * 
     * @param {*} button text of the button that needs to be located.
     * @returns locator 
     */
    getButtonLocator(button) {
        const buttonLocators = {
          Previous: locators.previousBtn,
          Next: locators.nextBtn
        }
    
        if (!(button in buttonLocators)) {
          throw new Error(`Button "${button}" is not recognized.`)
        }
    
        return page.locator(buttonLocators[button])
      }


    
}

module.exports = PaginationPage