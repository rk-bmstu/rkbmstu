import { RkbmstuPage } from './app.po';

describe('rkbmstu App', () => {
  let page: RkbmstuPage;

  beforeEach(() => {
    page = new RkbmstuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
