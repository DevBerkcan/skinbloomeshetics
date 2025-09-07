import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Animation styles
const arrowAnimation = {
  animation: `bounce 2s infinite`,
  keyframes: `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
  `,
};

function Banner() {
  // LiveSite Script Integration
  useEffect(() => {
    // Initialize LiveSite when component mounts
    if (typeof window !== 'undefined') {
      window.liveSiteAsyncInit = function() {
        if (window.LiveSite) {
          window.LiveSite.init({
            id: 'WI-XP8NFT0RUVL8A308D15W'
          });
        }
      };
      
      // Only add the script if it hasn't been added already
      if (!document.getElementById('livesite-jssdk')) {
        const script = document.createElement('script');
        script.id = 'livesite-jssdk';
        script.src = 'https://d2ra6nuwn69ktl.cloudfront.net/assets/livesite.js';
        script.async = true;
        document.body.appendChild(script);
      } else if (window.LiveSite) {
        // If script already exists, initialize directly
        window.LiveSite.init({
          id: 'WI-XP8NFT0RUVL8A308D15W'
        });
      }
    }
  }, []);

  // Function to handle appointment button click
  const handleAppointmentClick = (e) => {
    e.preventDefault();
    
    // Check if LiveSite is available and open the booking form
    if (typeof window !== 'undefined' && window.LiveSite) {
      window.LiveSite.open();
    } else {
      // Fallback: redirect to contact page if LiveSite not available
      window.location.href = "/kontakt";
    }
  };

  return (
    <>
      {/* Add the keyframes to the document */}
      <style>{arrowAnimation.keyframes}</style>

      <section className="banner mb-3 position-relative">
        <div className="container-fluid">
          <div className="row banner-bg-img">
            <div className="col-md-6">
              <h3>Verleihen Sie Ihrer Haut neuen Glanz.</h3>
              <p className="mt-4">
                Skinbloom Aesthetics - Ihre Experten für Anti Aging, PRP Behandlung,
                Faltenreduktion und Lippenoptimierung, in der Schweiz.
              </p>
              <div className="d-flex flex-wrap gap-2 align-items-center mt-5">
                {/* Updated appointment button with onClick handler */}
                <a 
                  href="#" 
                  className="bg-green appointment-btn" 
                  onClick={handleAppointmentClick}
                  style={{ 
                    textDecoration: 'none', 
                    display: 'inline-block',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  Jetzt Termin vereinbaren
                </a>
                <div className="text-center" style={{ marginLeft: "3rem" }}>
                  <img
                    src="assets/images/google.png"
                    width="25px"
                    alt="Google"
                  />
                  <div>
                    <div className="d-flex gap-1 align-items-center">
                      <span className="fw-bold fs-5">4.8</span>
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className="fa-sm"
                          style={{
                            color: "#FFD700",
                          }}
                        />
                      ))}
                    </div>
                    <Link
                      href="/#reviews"
                      className="text-light text-decoration-underline fw-bold"
                    >
                      zu allen Bewertungen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <a
          href="#über-uns"
          className="scroll-down-link"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
        >
          <img
            className="Transfer-down"
            src="assets/images/Transfer-down.png"
            alt="Scroll Down"
            style={{
              animation: arrowAnimation.animation,
              height: "auto",
              transition: "opacity 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </a>
      </section>
    </>
  );
}

export default Banner;