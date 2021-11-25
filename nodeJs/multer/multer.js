// ? multer는 이미지, 동영상 등 여러가지 파일들을 멀티파트 형식으로 업로드할 때 사용하는 미들웨어.
// 멀티파트 형식: enctype: multipart/form-data
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // * 어디에 저장할지
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      // * 어떤 이름으로 저장할지 
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now()+ ext) // 파일명을 파일명+현재시간.확장자 로 해주기 위한 작업
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 } // 1kb: 1024bytes, 1mb: 1024kb -> 5MB로 크기 제한.
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  fs.readdirSync('./uploads');
} catch(error) {
  console.error('uploads 폴더가 없으니까 하나 만들려고');
  fs.mkdir('./uploads');
}

app.post('/upload', upload.single('image'), (req, res) => {
  // 파일을 하나만 업로드 하는 경우 single미들웨어를 사용할 수 있다.
  // single미들웨어를 라우터 미들웨어 앞에두면, multer설정에 따라 파일 업로드 후 req.file객체가 생성된다.
  // 인수는 input 태그의 name이나 폼 데이터의 키와 일치하게 넣으면 된다.
  console.log(req.file); // file의 데이터는 req.file에 담기고
  console.log(req.body); // req.body에는 파일이 아닌 데이터인 title이 담겨있다.(파일이 아닌 데이터는 req.body로 간다.)
})

app.listen(8081, () => console.log('8081 start'));