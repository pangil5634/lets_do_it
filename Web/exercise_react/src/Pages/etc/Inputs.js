import { useState }  from "react"
function Inputs() {
    const [email, setEmail] = useState("okk6681");
    return (
        <div>
            <h3>Input Test</h3>
            <form>
                <span>이메일 : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></span>
                <button type = "submit">제출</button>
                {/* <button onClick={() => console.log(email)}>이메일 출력</button> */}
            </form>
        </div>
    );
}

export default Inputs;