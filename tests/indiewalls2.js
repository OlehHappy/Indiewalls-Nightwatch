module.exports = {

  'Load login page': function (client) {
    var data = client.globals.data2;

    client
      .url(data.url)
      .waitForElementVisible('input[data-pgobj=input-email]'
        , 5000)
      .setValue('input[data-pgobj=input-email]'
        , data.username)
      .setValue('input[type=password]'
        , data.password);
  }, // Load login page

  'Click on login button': function (client) {
    client
      .click('input[data-pgobj=btn-login]')
      .useXpath();
  }, // Click on login button

  'Click on change email': function (client) {
    client
      .waitForElementVisible("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]"
        , 10000)
      .click("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/span[1]/a[1]");
  }, // Click on change email

  'Input password for confirm': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//input[@type='password']"
        , 10000)
      .setValue("//input[@type='password']"
        , data.password);
  }, // Input password

  'Click OK': function (client) {
    client
      .click("//div[@class='modal-body']/div[1]/div[@class='row']/div[2]/button");
  }, // Click OK

  'Set new Email': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/input"
        , 10000)
      .clearValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/input")
      .setValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/input", data.testEmail);
  }, // Now change Email

  'Click Update Info': function (client) {
    client
      .click("//div[@class='panel-body']/div[2]/button");
  }, // Click Update Info

  'Check for Email changes': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/p"
        , 10000)
      .getText("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/p"
        , function (result) {
            this.assert.equal(result.value, data.testEmail)
        });
  }, // Check for Email changes

  'Get back old email': function (client) {
    var data = client.globals.data2;

    client
      .click("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/span[1]/a[1]")
      .clearValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/input")
      .setValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[3]/input"
        , data.username);
  }, // Get back old email

  'Click on Update to get back old Email': function (client) {
    client
      .click("//div[@class='panel-body']/div[2]/button");
  }, // Click on Update to get back old Email

  'Update name': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//div[@class='panel-body']/div[2]/button[@disabled='true']"
        , 10000)
      .clearValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[1]/input[1]")
      .setValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[1]/input[1]"
        , data.testFirstName)
      .clearValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[2]/input[1]")
      .setValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[2]/input[1]"
        , data.testLastName);;
  }, // Start to check update name

  'Click Update to change the Name': function (client) {
    client
      .click("//div[@class='panel-body']/div[2]/button");
  }, // Start to check update name

  'Check update name to equals': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]"
        , 10000)
      .getValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[1]/input"
        , function (result) {
            this.assert.equal(result.value, data.testFirstName)
        })
      .getValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[2]/input"
        , function (result) {
            this.assert.equal(result.value, data.testLastName)
        });
  }, // Check update name to equals

  'Get name back': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//div[@class='panel-body']/div[2]/button[@disabled='true']"
        , 10000)
      .clearValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[1]/input[1]")
      .setValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[1]/input[1]"
        , data.firstName)
      .clearValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[2]/input[1]")
      .setValue("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[2]/input[1]"
        , data.lastName);
  }, // Get name back

  'Click Update to get name back': function (client) {
    client
      .click("//div[@class='panel-body']/div[2]/button");
  }, // Click Update to get name back

  'Click on Change password': function (client) {
    client
      .waitForElementVisible("//div[@class='panel-body']/div[2]/button[@disabled='true']"
        , 10000)
      .click("//div[@class='panel-body']/div[1]/div[@class='row']/div[2]/div[4]/span/a");
  }, // Click on Change password

  'Set a new password': function (client) {
    var data = client.globals.data2;

    client
      .waitForElementVisible("//input[@type='password']"
        , 10000)
      .setValue("//input[@type='password']"
        , data.password);
  }, // Set a new password

  'Click on Update to set a new password': function (client) {
    client
      .click("//div[@class='panel-body']/div[2]/button")
      .waitForElementVisible("//div[@class='panel-body']/div[2]/button[@disabled='true']"
        , 10000);
  }, // Click on Update to set a new password

  'Click on profile picture': function (client) {
    client
      .waitForElementVisible("//div[@class='avatar-badge']"
        , 10000)
      // .click("//div[@class='avatar']");
  }, // Click on profile picture

  'Choose the image': function (client) {
    client.keys(client.Keys.DOWN_ARROW);
    client.keys(client.Keys.ENTER);
    client.keys(client.Keys.ESC);
  },

  'End tests': function (client) {
    client
      .end();
  }

};
