## Client

This is the place for your application front-end files.

1. Install client-side dependencies
- AngularJS 1.6.3 (Angular-ui-router 0.4.2) 
- Bootstrap 3.3.7
- jquery 3.1.1
From the project root, run:
$ bower install angular angular-resource angular-ui-router bootstrap

2. Configure the vendor directory

In the project root, create .bowerrc.

Bower installs packages in bower_components by default, but we reconfigure this to client/vendor to make importing files into index.html more convenient. 
Copy all folders in bower_components default folder to client/vendor then delete bower_components in root

3. Generate lb-services.js
To generate the Angular services for a LoopBack application, use the AngularJS SDK lb-ng command-line tool.  You may need to install lb-ng with the following command.

$ npm install -g loopback-sdk-angular-cli
Next, create the client/js/services directory, if you don’t already have it (by using the mkdir command, for example), then in the project root directory, enter the lb-ng command as follows:

$ mkdir -p client/js/services
$ lb-ng server/server.js client/js/services/lb-services.js
This command creates client/js/services/lb-services.js.
