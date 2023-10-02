///<refrence types ="cypress"/>

describe('Automation Test Suite',() =>{

    it("Test_1 Valid Credentials",()=>{
        cy.visit("https://dev.deepthought.education/login"); // Visit URL
        cy.get('#username').click().type("csecec1803106@gmail.com"); // Locate Username element and type
        cy.get('#password').click().type("WWXS6Y896eVdCu#"); // Locate Password and type
        cy.get('#login').click(); // Locate login button and click
    })

    it("Test_2  InValid Credentials_1",()=>{
        cy.visit("https://dev.deepthought.education/login"); // Visit URL
        cy.get('#username').click().type("csecec@gmail.com"); // Locate Username element and type invalid username
        cy.get('#password').click().type("WWXS6Y896eVdCu#"); // Locate Password and type valid password
        cy.get('#login').click(); // Locate login button and click
    })

    it("Test_3  InValid Credentials_2",()=>{
        cy.visit("https://dev.deepthought.education/login"); // Visit URL
        cy.get('#username').click().type("csecec1803106@gmail.com"); // Locate Username element and type Valid username
        cy.get('#password').click().type("WWXS6Y896dCu#"); // Locate Password and type Invalid password
        cy.get('#login').click(); // Locate login button and click
    })

    it("Test_4  InValid Credentials_3",()=>{
        cy.visit("https://dev.deepthought.education/login"); // Visit URL
        cy.get('#username').click().type("csecec1803106@gmail.com"); // Locate Username element and type Invalid username
        cy.get('#password').click().type("WWXS6Y896dCu#"); // Locate Password and type Invalid password
        cy.get('#login').click(); 
    })

    it("Test_5  Only Username",()=>{
        cy.visit("https://dev.deepthought.education/login"); // Visit URL
        cy.get('#username').click().type("csecec1803106@gmail.com"); // Only Username Provided 
        cy.get('#login').click(); 
        cy.get('#login-error-notify').should('be.visible'); // Error Messages
    })

    it("Test_6  Only Password",()=>{
        cy.visit("https://dev.deepthought.education/login"); 
        cy.get('#password').click().type("WWXS6Y896dCu#"); //Only Password Provided
        cy.get('#login').click(); 
        cy.get('#login-error-notify').should('be.visible');
    })

    it("Test_7  Error Messages is Displayed ",()=>{
        cy.visit("https://dev.deepthought.education/login"); 
        cy.get('#username').click().type("csecec@gmail.com"); // Valid Username
        cy.get('#password').click().type("WWXS6Y89VdCu#"); 
        cy.get('#login').click();
        cy.get('#login-error-notify > p').should('be.visible'); // Error Messages should visible 
        cy.title().should('eq','Login to your account | DeepThought');
    })

    it("Test_8 ValidateDashboard",()=>{
        cy.visit("https://dev.deepthought.education/login"); 
        cy.get('#username').click().type("csecec1803106@gmail.com"); 
        cy.get('#password').click().type("WWXS6Y896eVdCu#"); 
        cy.get('#login').click(); 
        cy.title().should('eq','Login to your account | DeepThought');
        cy.get('.fa-home').should('be.visible'); // Validate Home button
        cy.reload();
        cy.clearCookies();
        

    })


})