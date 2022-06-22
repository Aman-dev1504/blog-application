import "./contact.css"
import ContactGif from "../../assets/Contactus.gif"
export default function contact() {
  return (
    <div className="contact">
        <div className="contactWrapper">
            <div className="ContactImg">
                <img src={ ContactGif } alt="" />
            </div>

            <div className="contactFormSec">
                <form className="contactusForm">
                <h3>Hey !!</h3>
           <input type="text" placeholder="Enter your username" />
            <input type="text" placeholder="Enter your email" />
            <textarea type="text" placeholder="Explain here"/>
            <button className="contactusBtn">Get in touch!</button>
                </form>
            </div>
        </div>
    </div>
  )
}
