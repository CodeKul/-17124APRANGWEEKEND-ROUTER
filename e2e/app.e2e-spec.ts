import { AppRouterPage } from './app.po';

describe('app-router App', () => {
  let page: AppRouterPage;

  beforeEach(() => {
    page = new AppRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
