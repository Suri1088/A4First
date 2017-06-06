import { FirstPage } from './app.po';

describe('first App', () => {
  let page: FirstPage;

  beforeEach(() => {
    page = new FirstPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
