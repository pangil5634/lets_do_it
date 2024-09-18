const fs = require('fs');
const path = require('path');

// JSON 파일 경로
const schedulePath = path.join(__dirname, 'db', 'schedule.json');
const userPath = path.join(__dirname, 'db', 'user.json');
const scorePath = path.join(__dirname, 'db', 'score.json');

// JSON 파일 읽기
const scheduleData = JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
const userData = JSON.parse(fs.readFileSync(userPath, 'utf8'));
const scoreData = JSON.parse(fs.readFileSync(scorePath, 'utf8'));

// 병합된 데이터 생성
const mergedData = {
    schedule: scheduleData,
    users: userData,
    scores: scoreData
};

// 병합된 데이터를 새로운 JSON 파일로 저장
const outputPath = path.join(__dirname, 'db', 'db.json');
fs.writeFileSync(outputPath, JSON.stringify(mergedData, null, 2));

console.log('JSON 파일이 성공적으로 병합되었습니다.');
