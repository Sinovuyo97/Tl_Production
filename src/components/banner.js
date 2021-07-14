import About from "./aboutus";
import Gallery from "../Gallery";
import Services from "./services";
import Footer from "./footer";
function Banner() {
  return (
      <>
    <div class="jumbotron"id="Banner">
      <h1 className="display-4 font-weight-bold" style={{color:'#E7F2F5'}}>Serve Your Gift To The World!</h1>
      <p className="">
        IMPROVE LIVES OF WOMEN THROUGH ART
      </p>
      <p class="lead">
        <a className="btn btn-primary btn-lg font-weight-bold" href="#" role="button">
          DONATE
        </a>
      </p>
    </div>
    <About/>
    <Services/>
  
    <Footer/>
    </>
  );
}
export default Banner;
