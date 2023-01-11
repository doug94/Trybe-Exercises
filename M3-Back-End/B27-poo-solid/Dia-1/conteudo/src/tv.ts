class Tv {
  brand: string;
  size: number;
  resolution: { x: number, y: number };
  connections: string[];
  connectedTo: string | null;

  constructor(brand: string, size: number, resolution: { x: number, y: number }, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = null;
  }

  turnOn() {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const livingRoomTv = new Tv('Philco', 51, { x: 1024, y: 768 }, ['HDMI', 'USB', 'RCA', 'Antenna', 'Internet']);
const parentsBedroomTv = new Tv('AOC', 42, { x: 1920, y: 1080 }, ['HDMI', 'USB', 'Composite', 'Antenna']);
const myTv = new Tv('LG', 43, { x: 1920, y: 1080 }, ['HDMI', 'USB', 'Antenna', 'Internet']);
const myOldMonitor = new Tv('CCE', 13, { x: 1280, y: 800 }, ['VGA']);
const formerWorkMonitor = new Tv('Dell', 21, { x: 1440, y: 900 }, ['VGA', 'DVI']);

livingRoomTv.turnOn();
parentsBedroomTv.turnOn();
myTv.turnOn();
myOldMonitor.turnOn();
formerWorkMonitor.turnOn();