import css from './footer.module.css'

function Footer() {
  return (
    <div>
      <footer>
        <div class={css.logo_container}>
          <img src="./a.png" alt="" />
          <div class={css.logo_text}>
            <b>Skilline</b>
            Virtual Class <br /> for Zoom
          </div>
        </div>

        <div class={css.subscribe_title}>Subscribe to get our Newsletter</div>

        <form class={css.subscribe_form}>
          <input type="email" placeholder="Your Email" required />
          <button type={css.submit}>Subscribe</button>
        </form>

        <div class={css.footer_links}>
          <a href="#">Careers</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>

        <div class={css.copyright}>
          © 2021 Class Technologies Inc.
        </div>
      </footer>

    </div >
  )
}

export default Footer
