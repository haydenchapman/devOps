
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Draw button displays div with id choices", async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const divs = await driver.findElement(By.id("choices"));
    const displaying = await divs.isDisplayed();
    expect(displaying).toBe(true);
  
    await driver.sleep(5000);
});

test("adding a bot with add to duo button to your duo", async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const divs = await driver.findElement(By.id("choices"));
    const botBtn = await driver.findElement(By.className("bot-btn"));
    await botBtn.click();
    const playerBot = await driver.findElement(By.id("player-duo"));
    const isDisplayed = await playerBot.isDisplayed();
    expect(isDisplayed).toBe(true);
    await driver.sleep(5000);
});

test("removing bot", async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const divs = await driver.findElement(By.id("choices"));
    const botBtn = await driver.findElement(By.className("bot-btn"));
    await botBtn.click();
    const playerBot = await driver.findElement(By.id("player-duo"));
    await driver.sleep(2000);
    const removeBtn = await driver.findElement(By.linkText("Remove from Duo"));
    await removeBtn.click();
    expect(playerBot).toBe(false);
  
    await driver.sleep(5000);
});