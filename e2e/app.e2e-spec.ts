import { Ng2UserDiariesPage } from './app.po';

describe('ng2-user-diaries App', () => {
  let page: Ng2UserDiariesPage;

  beforeEach(() => {
    page = new Ng2UserDiariesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
