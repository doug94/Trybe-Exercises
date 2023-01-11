class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: { x: number, y: number };
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: { x: number, y: number }, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(connection: string) {
    if (this._connections.includes(connection)) this._connectedTo = connection;
    else console.log('Sorry, connection unavailable');
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections);
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

myTv.connectedTo = 'HDMI';
console.log(myTv.connectedTo);