import { MYFIRSTNGAPPPage } from './app.po';

describe('my-first-ng-app App', () => {
  let page: MYFIRSTNGAPPPage;

  beforeEach(() => {
    page = new MYFIRSTNGAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
