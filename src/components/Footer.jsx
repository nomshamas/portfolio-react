import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center justify-content-md-between align-items-center">
          <p className="copyright">Copyright &copy; 2022, All right reserved!</p>   
          <div className="social-icons">
            <a href='https://www.facebook.com/IamNom0/'> <i className="fa fa-facebook icon"></i></a>
            <a href='https://www.instagram.com/nom.butt/'> <i className="fa fa-instagram icon"></i></a>
            <a href='https://www.youtube.com/@nomshamas8125'> <i className="fa fa-youtube icon"></i></a>
            <a href='https://www.linkedin.com/in/nomshamas/'> <i className="fa fa-linkedin icon"></i></a>
            <a href='https://join.skype.com/invite/SVCOPqhfkui7'> <i className="fa fa-skype icon"></i></a>
            <a href='https://github.com/nomshamas'> <i className="fa fa-github icon"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer