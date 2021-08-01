import DHT22 from "espruino-modules/DHT22";
import { sum } from "./utils/calculate";

const dht22 = new DHT22(P2);

const store = {
  currentTemp: 0,
  currentWet: 0,
};

dht22.read(function (a) {
  console.log("Temp is " + a.temp.toString() + " and RH is " + a.rh.toString());
});

const app = () => {
  setInterval(() => {
    dht22.read((sensorValue) => {
      store.currentTemp = sensorValue.temp;
      store.currentWet = sensorValue.rh;
    });
    console.log(
      `Current temperature is: ${store.currentTemp}; Current wet is: ${store.currentWet}`
    );
  }, 500);
};

sum(1, 3, 5);

app();
