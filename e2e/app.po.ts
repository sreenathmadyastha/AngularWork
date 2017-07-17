import { browser, by, element } from 'protractor';

export class MYFIRSTNGAPPPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-app h1')).getText();
  }
}
