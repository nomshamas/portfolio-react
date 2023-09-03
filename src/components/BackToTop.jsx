import React from 'react'
import { useEffect } from 'react';

function BackToTop() {

  useEffect(() => {
    const backButton = document.getElementById('btn-back-to-top');

    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
      }
      else {
        backButton.style.display = "none";
      }
    }
    
    backButton.addEventListener("click", backToTop);
    
    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return () => {
    };
  }, []);

  return (
    <div className="back-top">
      <button type="button" className="btn scroll-btn btn-sm" id="btn-back-to-top" > <i className="fa fa-arrow-up"></i> </button>
    </div>
  )
}

export default BackToTop