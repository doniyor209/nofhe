import css from './header.module.css'


function Header() {
  return (
    <div>
      <header className={css.body}>
        <div className="container">
          <div className={css.headerOta}>
            <img src="./a.png" alt="" />
            <nav>
              <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
                <button className={css.btn1}>Login</button>
                <button className={css.btn2}>Sign Up</button>
              </ul>
            </nav>

          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className={css.df}>

            <div className={css.hero_text}>
              <h2><span>Studying</span> Online is now <br /> much easier</h2>
              <p>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>

              <div className={css.hero_text2}>
                <button className={css.btn3}>Join for free</button>
                <button className={css.btn4}><i class="fa-solid fa-play"></i></button>
                <h4>Watch how it works</h4>
              </div>
            </div>
              <img src="./b.png" alt=""  />

           

          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
