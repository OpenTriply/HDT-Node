const hdt = require('./lib/hdt')

async function run() {

  const doc = await hdt.fromFile('./test/t.hdt');

  console.time('running queries SP?')
  for (var i = 0; i < 500000; i++) {
    await doc.searchTriples(`http://hdtbench/sub-${i}`, 'http://hdtbench/pred-0',null);
  }
  console.timeEnd('running queries SP?')

}

run().then(() => console.log('done'), (e) => console.error(e));
