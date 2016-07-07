# packet-director
This Meteor project is for me to learn how to use blaze and Meteor. I came up with the idea for this app that diverts packets coming from a source on the internet to another through a private WAN/circuit.

#How It works
Select your entry and exit points for your packets. And we will provide you with an I.P address in each location. When you connect to the I.P address, the packets will be sent to the destination though our private network(WAN/Circuit). The IP headers in the packets are also translated so applications dont get confused. The application will only see the I.P that is closest to it.

#Dependencies
Bootstrap - meteor add twbs:bootstrap

Smoothscroll - meteor add slam310:smooth-scroll
