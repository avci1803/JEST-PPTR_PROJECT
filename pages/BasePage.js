export default class BasePage {
  async wait(time) {
    await page.settimeout(time);
  }

  async getTitle() {
    return await page.getTitle();
  }

  async getUrl() {
    return await page.getUrl();
  }
}
