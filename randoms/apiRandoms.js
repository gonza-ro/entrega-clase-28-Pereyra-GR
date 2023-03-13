import {parentPort} from 'worker_threads'

function generateRandoms(cant) {
  const randoms = {};
  for (let i = 0; i < cant; i++) {
    const num = Math.floor(Math.random() * 1000) + 1;
    randoms[num] = randoms[num] ? randoms[num] + 1 : 1;
  }
  return randoms;
}

parentPort.on('message', (cant) => {
  const randoms = generateRandoms(cant);
  parentPort.postMessage(randoms);
});
