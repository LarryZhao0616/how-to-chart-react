export interface DataItem {
  day: string,
  value: number,
  type: string
}

const data: DataItem[] = [
  { day: 'Mon', value: 120, type: 'iOS' },
  { day: 'Tue', value: 200, type: 'iOS' },
  { day: 'Wed', value: 150, type: 'iOS' },
  { day: 'Thu', value: 80, type: 'iOS' },
  { day: 'Fri', value: 270, type: 'iOS' },
  { day: 'Sat', value: 110, type: 'iOS' },
  { day: 'Sun', value: 130, type: 'iOS' },
  { day: 'Mon', value: 80, type: 'Android' },
  { day: 'Tue', value: 250, type: 'Android' },
  { day: 'Wed', value: 100, type: 'Android' },
  { day: 'Thu', value: 120, type: 'Android' },
  { day: 'Fri', value: 160, type: 'Android' },
  { day: 'Sat', value: 150, type: 'Android' },
  { day: 'Sun', value: 240, type: 'Android' },
];

let xSet = new Set();
let s1: number[] = [];
let s2: number[] = [];
data.forEach(m => {
  xSet.add(m.day);
  if (m.type === 'iOS') {
    s1.push(m.value);
  }
  if (m.type === 'Android') {
    s2.push(m.value);
  }
});

export default data;

export {
  xSet, s1, s2
}
