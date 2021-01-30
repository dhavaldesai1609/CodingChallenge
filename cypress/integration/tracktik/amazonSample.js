/// <reference types="cypress" />

// This function verifies visibility of the object
function verifyVisibility(object) {
    cy.get(object).should('be.visible')
}

// This functions clicks on the given object
function clickObject(clickableObject){
  cy.get(clickableObject).click()
}

// This functions types on the given object
function typeText(Object, text){
  cy.get(Object).type(text)
}

function isEnabled(object){
  cy.get(object).should('be.enabled')
}

function verifyText(object,text){
  cy.get(object).should('contain',text)
}

//Objects Repository to be used within the script
var url = 'https://www.amazon.ca//'
var amazonLogo = '#nav-logo-sprites'
var amazonLogoSmall = '.a-icon-logo'
var searchBar = '#nav-search'
var countryFlag = '.icp-nav-flag'
var welcomeMessage = '#nav-global-location-popover-link'
var accounts = '#nav-link-accountList'
var orders = '#nav-orders'
var shoppingCart = '.nav-cart-icon'
var mainMenu = '#nav-hamburger-menu'
var bestSellers = '[href="/Best-Sellers-generic/zgbs/?ref_=nav_cs_bestsellers_63ca45fd42734a1a90e55e964c1a4be0"]'
var giftideas = '[href="/gcx/-/gfhz/?ref_=nav_cs_giftfinder_192be93f79264d46933b55cd454cfadf"]'
var prime = '#nav-link-prime > :nth-child(1)'
var newReleases = '[href="/gp/new-releases/?ref_=nav_cs_newreleases_3700f09c268c435e83b755749c4fc4e9"]'
var customerService = '[href="/gp/help/customer/display.html?ref_=nav_cs_help_91eafdc699444f9c9ab412df262cc693"]'
var sliderImage = '.cropped-image-map-size > .cropped-image-map-center-alignment > span > .a-link-normal > img'
var signIn = '.a-padding-extra-large'
var username = '#ap_email'
var createAccount = '#createAccountSubmit'
var continueButton = '.a-button-inner > #continue'
var loginErrorMsg = '#auth-email-missing-alert > .a-box-inner > .a-alert-content'
var password = '#ap_password'
var signInSubmit = '#signInSubmit'

  it('Verifies visibility of the objects on Homepage', () => {
    //Visit Amazon.ca
    cy.visit(url);

    //Amazon Logo should be displayed
    verifyVisibility(amazonLogo)
    
    //Search bar should be displayed
    verifyVisibility(searchBar)
    
    //Country/Location flag should be displayed
    verifyVisibility(countryFlag)
    
    //Hello message should be displayed
    verifyVisibility(welcomeMessage)
    
    //Accounts text should be displayed
    verifyVisibility(accounts)

    //Orders and returns
    verifyVisibility(orders)
    
    //Shopping Cart Icon
    verifyVisibility(shoppingCart)
    
    // All Menu Bar
    verifyVisibility(mainMenu)
    
    //BestSellers
    verifyVisibility (bestSellers)
  
    //Gift Ideas
    verifyVisibility(giftideas)
    
    //Prime
    verifyVisibility(prime)
    
    //New Releases
    verifyVisibility(newReleases)
    
    //Customer Service
    verifyVisibility(customerService)
    
    //Slider
    verifyVisibility(sliderImage)
    
    //Search for a particular item
    typeText(searchBar, 'Apple')
    
  })

  it('Verifies objects on the Sign In page', ()=> {
    //Click on Account to sign in
    clickObject(accounts)

    //Verify amazon logo is visible
    verifyVisibility(amazonLogoSmall)
    
    //Verify sign in page is visible
    verifyVisibility(signIn)
    
    //Verify username field is visible
    verifyVisibility(username)
    
    //Verify username field is editable
    isEnabled(username)
    
    //verify create account button is visible
    verifyVisibility (createAccount)
    
    //verify continue button is visible
    verifyVisibility(continueButton)
    
  })

  it('Click on Sign-In without entering username, verify error message', ()=> {
    
    //Click on continue button without entering username
    clickObject(continueButton)
    
    //Verify Error message
    verifyText(loginErrorMsg, 'Enter your e-mail address or mobile phone number')
    
  })


  it('Performs Sign-in function', ()=> {

    //Enter Username
    typeText(username, 'dhavaldesai1609@gmail.com')
    
    //Click on continue button
    clickObject(continueButton)
    
    //Verify password field is visible
    verifyVisibility(password)
    
    //Verify password field is editable
    isEnabled(password)
    
    //Enter Password
    typeText(password,'neverShareYourPassword@123')
    
    //Verify sign in button
    verifyVisibility(signInSubmit)
    
    //Click on sign in button
    clickObject(signInSubmit)
    
  })