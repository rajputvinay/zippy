// import support_image from "./support.jpg";
import support_image from "./Logo.png";
import "./support.css";
export function Support() {
  return (
    <div className="support_page">
      <div className=" support_head">
        <h2>CONTACT US</h2>
      </div>
      <div className="support_row">
        <div className="support_div">
          <div className="support_input">
            <form action="https://formspree.io/f/mjvdbdjr" method="POST">
              <h5 className="input_head">
                Enter First Name<span>&#42;</span> :
              </h5>
              <input
                className="sinput"
                type="text"
                size={"48"}
                name="Name"
                placeholder="First Name"
                required
              />

              <br />
              <h5 className="input_head">Enter Last Name :</h5>
              <input
                className="sinput"
                type="text"
                size={"48"}
                name="Name"
                placeholder="Last Name"
              />

              <br />
              <h5 className="input_head">
                Enter Your Email<span>&#42;</span> :
              </h5>
              <input
                className="sinput"
                type="Email-id"
                name="email"
                size={"48"}
                placeholder="Email"
                required
              />

              <br />
              <h5 className="input_head">
                Message<span>&#42;</span> :
              </h5>

              <textarea
                style={{
                  border: "solid 2px #F5F4FA",
                  backgroundColor: "#F5F4FA",
                  paddingLeft: "20px",
                }}
                className="stext"
                name="Message"
                rows="4"
                cols="49.5"
                placeholder="Message"
                required
              />

              <div className="support_btn">
                <input className="sbutton" type={"submit"} value={"Submit"} />
              </div>
            </form>
          </div>
        </div>

        <div className="support_div2">
          <img className="support_image" src={support_image} alt="supp-img" />
        </div>
      </div>
    </div>
  );
}
