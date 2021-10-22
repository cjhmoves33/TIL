// !! 내장모듈은 Node.js 공식문서에 API DOCS를 읽어보면 정확한 정보를 알 수 있다.

const OS = require('os');

console.log('운영체제 정보 ------------------------------------------');
console.log('OS.arch: ', OS.arch());
console.log('OS.platform: ', OS.platform());
console.log('OS.type: ', OS.type());
console.log('OS.uptime: ', OS.uptime());
console.log('OS.hostname: ', OS.hostname());
console.log('OS.release: ', OS.release());

console.log('경로 -------------------------------------------------');
console.log('OS.homedir: ', OS.homedir());
console.log('OS.tmpdir: ', OS.tmpdir());

console.log('CPU 정보 ---------------------------------------------');
console.log('OS.cpus: ', OS.cpus());
console.log('OS.cpus().length: ', OS.cpus().length);

console.log('메모리 정보 --------------------------------------------');
console.log('OS.freemem: ', OS.freemem());
console.log('OS.totalmem: ', OS.totalmem());

// ? 서버를 돌려야하는데 노드는 기본적으로 싱글 스레드라서 cpu를 하나밖에 사용하지않는다. 이때 효율 적으로 서버를 돌릴려면 cpu전부로 서버를 돌리면 된다.
// ? 그런데 컴퓨터마다 코어의 수 가 전붇다르다. 이때 os.cpus()를 사용하면 코어가 몇개인지 알 수 있다.
// ? 조금 유의해야할 점은 노드에서 말하는 스레드와 하드웨어에서 말하는 스레드가 서로 다른 것일 수 있다.
