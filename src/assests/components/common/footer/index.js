import "./style.css";

function FooterComponent() {
  return (
    <footer>
    <div class="footer-content">
      <h3>CryptoTracker.</h3>
      <p>The products and/or services on this website are also offered on the Crypto.com Exchange App, which is distinct from the Crypto.com Main App. The products offered on this website and on the Crypto.com Exchange App might include volatile assets that you trade at your own risk.</p>
      <ul class="social-links">
        <li><a href="#"><i class="fab fa-facebook">Company</i></a></li>
        <li><a href="#"><i class="fab fa-twitter">Trade</i></a></li>
        <li><a href="#"><i class="fab fa-instagram">Aboutus</i></a></li>
        <li><a href="#"><i class="fab fa-linkedin">ContactUs</i></a></li>
        <li><a href="#"><i class="fab fa-linkedin">Pivacy Policy</i></a></li>
        <li><a href="#"><i class="fab fa-linkedin">Vision</i></a></li>
      </ul>
    </div>
  </footer>
  );
}

export default FooterComponent;
