const { chromium } = require('@playwright/test')
const { Before, After, AfterAll, BeforeAll, Status, setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(60 * 1000)

const options = {
  headless: true,
  retries: 1,
  video: 'on'
}

BeforeAll(async function () {
  global.browser = await chromium.launch(options)
})

Before(async function () {
  global.context = await global.browser.newContext({
    viewport: { width: 1920, height: 1080 }
  })
  global.page = await global.context.newPage()
})

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const buffer = await global.page.screenshot({
      path: `reports/${scenario.pickle.name}.png`,
      fullPage: true
    })

    this.attach(buffer, 'image/png')
  }

  await global.page.close()
  await global.context.close()
})

AfterAll(async function () {
  await global.browser.close()
})
