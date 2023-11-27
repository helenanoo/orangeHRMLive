Feature('OrangeHRM');
const faker = require('faker')

Scenario('Test Case 1: Login and Logout Account', ({ I }) => {
  I.resizeWindow(1200,800);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(3);
  I.fillField('username','Admin');
  I.fillField('password','admin123');
  I.click('.oxd-button');
  I.wait(3);
  I.seeInCurrentUrl('/dashboard');
  I.wait(3);
  I.click('.oxd-userdropdown-name');
  I.wait(3);
  I.click('Logout');
  I.seeInCurrentUrl('/auth/login');
});

Scenario('Test Case 2: Apply Leave', ({ I }) => {
  I.resizeWindow(1200,800);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(3);
  I.fillField('username','Admin');
  I.fillField('password','admin123');
  I.click('.oxd-button');
  I.wait(3);
  I.click('Leave');
  I.wait(5);
  I.click("//a[.='Apply']");
  I.wait(5);
});

//Sometimes can't cancel leave because already cancelled before
Scenario('Test Case 3: Cancel Leave', ({ I }) => {
  I.resizeWindow(1200,800);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(3);
  I.fillField('username','helloworld');
  I.fillField('password','admin123');
  I.click('.oxd-button');
  I.wait(3);
  I.click('Leave');
  I.wait(2);
  I.seeInCurrentUrl('/viewMyLeaveList');
  I.click("//div[@class='oxd-table-body']/div[1]//button[@class='oxd-button oxd-button--medium oxd-button--label-warn oxd-table-cell-action-space']");
  I.wait(3);
  I.refreshPage
  I.seeInCurrentUrl('/viewMyLeaveList');
  I.wait(4);
})

//if update personal details failed, change the ID on editIconID
Scenario('Test Case 4: Update Personal Details', ({ I }) => {
  I.resizeWindow(1200,800);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(5);
  I.fillField('username','Admin');
  I.wait(2);
  I.fillField('password','admin123');
  I.wait(2);
  I.click('.oxd-button');
  I.wait(3);
  I.seeInCurrentUrl('/dashboard');
  I.wait(5);
  I.click('PIM');
  I.wait(3);
  I.seeInCurrentUrl('/viewEmployeeList');
  I.wait(3);
  const editIconID1= "//div[@class='oxd-table-body']/div[27]//i[@class='oxd-icon bi-pencil-fill']";
  I.click(editIconID1);
  I.wait(3);
  I.seeInCurrentUrl('/viewPersonalDetails');
  I.wait(2);
  I.clearField('First Name');
  I.fillField('First Name', 'Theodore');
  I.clearField('Middle Name');
  I.fillField('Middle Name', 'Stefan');
  I.clearField('Last Name');
  I.fillField('Last Name', 'Marcusz');
  I.wait(3);
  I.click('Save');
  I.seeInCurrentUrl('/viewPersonalDetails');
});

Scenario('Test Case 5: Update Contact Details', ({ I }) => {
  I.resizeWindow(1200,800);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(5);
  I.fillField('username','Admin');
  I.wait(2);
  I.fillField('password','admin123');
  I.wait(2);
  I.click('.oxd-button');
  I.wait(3);
  I.seeInCurrentUrl('/dashboard');
  I.wait(5);
  I.click('PIM');
  I.wait(3);
  I.seeInCurrentUrl('/viewEmployeeList');
  I.wait(3);
  const editIconID1= "//div[@class='oxd-table-body']/div[27]//i[@class='oxd-icon bi-pencil-fill']";
  I.click(editIconID1);
  I.wait(3);
  I.seeInCurrentUrl('/viewPersonalDetails');
  I.wait(2);
  I.click('Contact Details');
  I.seeInCurrentUrl('/contactDetails');
  I.wait(5);
  I.click('.oxd-select-text-input');
  I.wait(3);
  I.click('Afghanistan');
  I.wait(5);
  I.click('Save');
  I.wait(7);
  I.seeInCurrentUrl('/contactDetails');
  I.wait(3);
});

Scenario('Test Case 6: Add job title', ({ I }) => {
  I.resizeWindow(1200,800);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(5);
  I.fillField('username','Admin');
  I.fillField('password','admin123');
  I.wait(2);
  I.click('.oxd-button');
  I.wait(3);
  I.seeInCurrentUrl('/dashboard');
  I.wait(3);
  I.click('Admin');
  I.wait(3);
  I.click("//span[contains(.,'Job')]");
  I.wait(3);
  I.click('Job Titles');
  I.wait(5);
  I.click("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
  I.wait(7);
  I.fillField("div[data-v-957b4417] input[data-v-1f99f73c]", 'QA EngineerLead');
  I.fillField('Type description here', 'Lead of QA');
  I.fillField('Add note', 'Must be at least 5 years');
  I.click('Save');
  I.wait(7);
  I.seeInCurrentUrl('/viewJobTitleList');
  I.wait(5);
});