function CRA19capstoneFestivalPage() {

	const handleGoodBye = () => {
		if(window.confirm("졸업하시겠습니까?")) {
			// window.location.reload(); // go to freshman
			alert("한동대 재입학을 축하드립니다.");
		} else {
			// navigate("/graduateschool"); // go to 대학원		
			alert("대학원 입학을 축하드립니다.");
        }
	}
	
	return(
		<button onClick = {handleGoodBye}>캡스톤 고생했어요</button>
	)
}


export default CRA19capstoneFestivalPage;