var heading = document.querySelector('#heading');	// var: 전역변수 쓸때
heading.onclick = function() {
    heading.style.color = "red";
    // style -> 태그 요소의 인라인 스타일링
    // style = "color:red"
}
