.. vim: set filetype=rst :

Development
-----------

Build a Sandbox
...............

As usual, the basics are packed in a ``zc.buildout`` package to provide NodeJS and some basics. 
Do::

    python2.7 bootstrap.py
    bin/buildout -vv

Run Development Mode
....................

You have to options when developing. You can either use your own local API or you can use slingshot. 
To use your local API:

::

    bin/grunt build serve:development

To use slingshot: (you can pass staging but its default value)

::

    bin/grunt build serve

Generate .po files for translations
...................................

::

    bin/grunt nggettext_extract

Template file will be saved to ``/po/template.pot``

How This Project Was Built
--------------------------

According to this page here: http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/ 
::

    bin/yo angular

More details about the scaffolding capabilities can be found here: https://github.com/yeoman/generator-angular 

Node-Dependencies
-----------------

Part of our dependencies is defined in ``package.json``, part is in ``bower.json``. Here is a discussion about that 
http://stackoverflow.com/questions/21198977/difference-between-grunt-and-bower-package-json-vs-bower-json/21199026#21199026 

Even though i would like to stick with one, the versions used by ``bower.json`` are not necessarily available for 
``package.json``

Links
=====

General AngularJS
-----------------

- http://tutorialzine.com/2013/08/learn-angularjs-5-examples/
- http://docs.angularjs.org/tutorial/step_11
- https://github.com/angular-ui/ui-router/wiki
- https://github.com/fnakstad/angular-client-side-auth
- https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-lazy-load-states 

Resource
--------

- http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html 
- _Provider Vs. Service Vs. Factory: http://stackoverflow.com/a/20613879/63097


Upload
------

- https://github.com/nervgh/angular-file-upload/blob/master/examples/simple/index.html 
                                                                                                      
