Eclipse Orion Tech Awareness
============================

This is the presentation of the Eclipse Orion. 

Web based IDE
-------------

- [ACE](http://ace.ajax.org)

- [Cloud 9](https://c9.io), GPL3, [My IDE](https://c9.io/nbogojevic)
- [CodeEnvy](https://www.codenvy.com), closed source, [My IDE](https://nbogojevic.codenvy.com/)

Eclipse
-------

Desktop based IDE for Java, JVM platform, C/C++, UML Modelling, Reporting, DB development, Lotus Notes.

- Java based
- OSGi/extensible via plugin
- OpenSource, EPL

Eclipse Orion
-------------

In short, today, Eclipse Orion is browser based IDE for JavaScript and HTML. As a larger scope, it is a platform for creating developpment tools on the web and for the web. 

It has a client-server [architecture](http://wiki.eclipse.org/images/0/04/Orion_Architecture_1.jpg).

Eclipse Orion is an open source, top level Eclipse Foundation project. 

Links: 
- [Orion homepage](http://www.eclipse.com/orion) 
- [wiki](http://wiki.eclipse.org/Orion)
- [OrionHub](http://orionhub.org)


Play ground
-----------

- [http://igraliste.servehttp.com/vote/](http://igraliste.servehttp.com/vote/) 
- [QR Code](http://api.qrserver.com/v1/create-qr-code/?data=http%3A%2F%2Figraliste.servehttp.com%2Fvote%2F&size=800x800)

Client side
-----------

Client side is the javascript/HTML layer that implements IDE presentation logic. It can run standalone or embedded in web page or desktop application.

Like Eclipse, it is extensible via plugins attached to extension points. There are [extension points](http://wiki.eclipse.org/Orion/Documentation/Developer_Guide) for editor, content assist, team etc.

Each plugin is implemented as an HTML page that has javascript that is loaded and ran when the page is loaded by Orion. 

Server side
-----------

Default impplementation is built on jetty + eclipse platform. As such it can use different eclipse plugins.

It can be implemented on any other platform, provided it implements Orion REST API, for example Node.js.


Self hosting
------------
