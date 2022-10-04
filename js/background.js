// 배경이미지 이름을 배열에 저장
const images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];

// 랜덤 함수의 특징 - 0~1사이의 실수 > 0~원하는 수 정수
// 배열 > 요소를 넣어주면 인덱스 값으로 접근가능
const randomNum = Math.floor(Math.random()*images.length);
const choseImage = images[randomNum];

// 바디 객체를 가져옴 (사이트배경을 body에 넣음)
const bodyBackground = document.querySelector("body");

// 바디에 이미지 추가
// css에서 이미지 추가하는 방식과 동일
bodyBackground.style.background = `url(./img/${choseImage})`
bodyBackground.style.backgroundSize = "cover"  /*이미지를 화면에 맞게 근데사진이 반복되있음*/
bodyBackground.style.backgroundRepeat = "no-repeat" /*반복된걸 없애줌*/
bodyBackground.style.position = "center"  /*사진이 정중앙 잡힘*/
bodyBackground.style.height = "874px"

// 복붙용 임시 배경
bodyBackground.style.background = "#000033"