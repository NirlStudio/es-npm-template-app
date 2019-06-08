#!/usr/bin/env sugly

# setup GLOBAL environment, for example: the value of user-name.
# Otherwise, export can be replaced to const or var.
export * (load "./profile");

# define a function.
(const hello (=> user
  print 'Hello, $(user ?? "World")';
).

# do something
(if (-module is -app)
  hello (arguments first:: ?? user-name);
).
