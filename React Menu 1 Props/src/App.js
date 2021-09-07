import Button from "./Components/Button"
import "./Models/Button.css"

function App(){
    return(
        <div className="arrange">
            <Button purpose="JOIN US" color={"#1b99c8"} />
            <Button purpose="SETTINGS" color={"#6996a0"}/>
            <Button purpose="LOGIN" color={"#f9a325"} />
            <Button purpose="CONTACT US" color={"#c1313d"}/>
            <Button purpose="SEARCH" color={"#73a33d"} />
            <Button purpose="HELP" color={"#595491"} />
            <Button purpose="HOME" color={"#dd4684"} />
            <Button purpose="DOWNLOAD" color={"#8b6c2b"} />
        </div>
    );
}

export default App;