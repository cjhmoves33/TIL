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

app.post('/upload', (req, res) => {
  console.log(req)
})

app.listen(8081, () => console.log('8081 start'));