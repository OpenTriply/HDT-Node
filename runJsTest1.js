const hdt = require('./lib/hdt')

async function run() {

  const doc = await hdt.fromFile('./test/t.hdt');

  console.time('running queries S??')
  for (var i = 0; i < 500000; i++) {
    await doc.searchTriples(`http://hdtbench/sub-${i}`, null,null);
  }
  console.timeEnd('running queries S??')

}

run().then(() => console.log('done'), (e) => console.error(e));
