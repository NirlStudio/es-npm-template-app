#!/usr/bin/env sugly

# setup environment, for example: the value of user-name.
var * (load "./profile");

# define a function.
(const hello (=> user
  print 'Hello, $(user ?? "World")';
).

# do something
(if (-module is -app)
  hello (arguments first:: ?? user-name);
).
