import image1 from "./images/8.jpg";
function Testimonials() {
  return (
      <>
      <h1 className="text-center pt-5" style={{ color: "#a05b82" }}>
        Testimonials
      </h1>
    <div className="testimonyContainer mt-5 pt-5" id="testimonials">
      <div className="testimonialBox">
        <div className="imgBox">
          <img src={image1} style={{width:'100px',height:'100px'}}/>
        </div>
        <p>
          
        </p>
        <h4>
          Sinovuyo Sikhisi<br/><span>
              mLab Codetribe Student</span>
        </h4>
      </div>
      <div className="testimonialBox">
        <div className="imgBox">
          <img src={image1} style={{width:'100px',height:'100px'}}/>
        </div>
        <p>
          We are no longer supporting this browser, so you’ll need to switch to
          one of our supported browsers to keep using Slack. We know this can be
          a pain, and we’re sorry for asking you to do it. We know this can be a
          pain, and we’re sorry for asking you to do it.
        </p>
        <h4>
          Sinovuyo Sikhisi<br/><span>mLab Codetribe Student</span>
        </h4>
      </div>
      <div className="testimonialBox">
        <div className="imgBox">
          <img src={image1} style={{width:'100px',height:'100px'}}/>
        </div>
        <p>
          We are no longer supporting this browser, so you’ll need to switch to
          one of our supported browsers to keep using Slack. We know this can be
          a pain, and we’re sorry for asking you to do it. We know this can be a
          pain, and we’re sorry for asking you to do it.
        </p>
        <h4>
          Sinovuyo Sikhisi<br/><span>mLab Codetribe Student</span>
        </h4>
      </div>
    </div>
    </>
  );
}
export default Testimonials;
