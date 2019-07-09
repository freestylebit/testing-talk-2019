module.exports = {
  'Test whether Google Works': function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'Rick Astley')
      .pause(2500)
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(2500)
      // .waitForElementVisible('#resultStats')
      .assert.containsText('#main', 'Never Gonna Give You Up')
      .end();
  },
};

// .click('a[href="https://en.wikipedia.org/wiki/Rick_Astley"]')
// .waitForElementVisible('body')
// .assert.containsText('body', 'Richard Pual Astley')
