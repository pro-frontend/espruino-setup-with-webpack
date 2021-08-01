function DHT22(pin) {
  this.pin = pin;
}

DHT22.prototype.read = function (cb, n) {
  if (!n) n = 10;
  let d = "";
  const ht = this;
  digitalWrite(ht.pin, 0);
  pinMode(ht.pin, "output"); // force pin state to output
  // start watching for state change
  this.watch = setWatch(
    function (t) {
      d += 0 | (t.time - t.lastTime > 0.00005);
    },
    ht.pin,
    { edge: "falling", repeat: true }
  );
  // raise pulse after 1ms
  setTimeout(function () {
    pinMode(ht.pin, "input_pullup");
    pinMode(ht.pin);
  }, 1);
  // stop looking after 50ms
  setTimeout(function () {
    if (ht.watch) {
      ht.watch = clearWatch(ht.watch);
    }
    const cks =
      parseInt(d.substr(2, 8), 2) +
      parseInt(d.substr(10, 8), 2) +
      parseInt(d.substr(18, 8), 2) +
      parseInt(d.substr(26, 8), 2);
    if (cks && (cks & 0xff) == parseInt(d.substr(34, 8), 2)) {
      cb({
        raw: d,
        rh: parseInt(d.substr(2, 16), 2) * 0.1,
        temp: parseInt(d.substr(19, 15), 2) * 0.2 * (0.5 - d[18]),
      });
    } else {
      if (n > 1)
        setTimeout(function () {
          ht.read(cb, --n);
        }, 500);
      else cb({ err: true, checksumError: cks > 0, raw: d, temp: -1, rh: -1 });
    }
  }, 50);
};
