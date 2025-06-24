import React from "react";
import "./index.css";
import "./CustomeBtn.css";
import CustomButton from "./CustomeBtn";


const Btn_And_contact = () => {
    return (
        <div className="btn-box">
            <a href="https://web.whatsapp.com/" target="_blank"><h3><i class="fa-solid fa-square-phone" ></i> +92 313 9850233</h3></a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank"><h3><i class="fa-solid fa-envelope"></i> YasirKhan9850233@gmail.com</h3></a>
            <div className="innerbtnbox">
                <CustomButton
                    label="Download Resume"
                    actionType="download"
                    href="/Yasir_Khan_FrontEnd Dev.pdf"
                    className="button-59">
                    </CustomButton>
                <CustomButton
                    label="Contact Now"
                    actionType="open"
                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=YasirKhan9850233@gmail.com"
                    className="button-59">
                    </CustomButton>
            </div>
        </div>
    );
}

export default Btn_And_contact;