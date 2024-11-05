// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// public 폴더를 정적 파일 경로로 설정
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로로 접속 시 index.html 파일을 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
