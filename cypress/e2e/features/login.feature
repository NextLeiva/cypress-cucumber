Feature: Login en la pagin de Automation Exercise

    La pagina de inicio de sesion funcionara segun las credenciales ingresadas

    Background:
        Given A web browser is at the Automation login page
    Scenario: Success Login
        When A user enters the username "joel.leiva@icloud.com", the password "joel", and clicks on the login button
        Then Validate the ingress and the web

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username              | password |
            | joel.leiva@icloud.com | nataly   |
        Then The error message "Your email or password is incorrect!" is displayed
