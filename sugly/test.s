(define "app" (=()
  (should "(run \"./app\") returns 'Hello, Sugar'" (=()
    assert "Hello, Sugar" (run "./app", *, -module-dir);
  ).
  (should "(run \"./app\" (@ \"World\")) returns 'Hello, World'" (=()
    assert "Hello, World" (run "app", (@ "World"), -module-dir);
  ).
).
