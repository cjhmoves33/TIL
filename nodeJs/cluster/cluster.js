const cluster = require('cluster');
const http = require('http');
const myCPUs = require('os').cpus().length;

if(cluster.isPrimary) {
  console.log('마스터 프로세스 아이디: ', process.pid);
  for(let i = 0; i < myCPUs; i++) {
    cluster.fork();
  }
}