import css from './main.module.css'

function Main() {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <h4 className={css.h4}>Trusted by 5,000+ Companies Worldwide</h4>

            <div className={css.df21}>
              <img src="./g.png" alt="" />
              <img src="./h.png" alt="" />
              <img src="./c.png" alt="" />
              <img src="./d.png" alt="" />
              <img src="./f.png" alt="" />
              <img src="./e.png" alt="" />
            </div>
          </div>
          <div className="container">
            <h1 className='text12'><span className={css.title_purple}>What is</span> <span className={css.title_orange}>Skilline?</span></h1>
            <p className={css.description}>
              Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online;
              manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.
            </p>

            <div className={css.cards}>
              <div className={css.card_instructor}>
                <div className={css.overlay}>
                  <h2>FOR INSTRUCTORS</h2>
                  <button className={css.blueBtn}>Start a className today</button>
                </div>
              </div>
              <div className={css.card_student}>
                <div className={css.overlay}>
                  <h2>FOR STUDENTS</h2>
                  <button className={css.blueBtn}>Enter access code</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div className={css.df8520}>
              <div class={css.text_section}>
                <h1>
                  Everything you can do in a physical classroom, <span class={css.highlight}>you can do with Skilline</span>
                </h1>
                <p>
                  Skilline’s school management software helps traditional and online schools manage scheduling,
                  attendance, payments and virtual classrooms all in one secure cloud-based system.
                </p>
                <a href="#" class={css.learn_more}>Learn more</a>
              </div>
              <div class={css.image_section}>
                <img src="./l.png" alt="" />
                <div class={css.play_button}><i class="fa-solid fa-play"></i></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div className={css.df8520}>
              <div class={css.image_section}>
                <img src="./m.png" alt="" />
                <div class={css.play_button}><i class="fa-solid fa-play"></i></div>
              </div>
              <div class={css.text_section}>
                <h1>
                  Assessments, <span class={css.highlight}>Quizzes,</span> Tests
                </h1>
                <p>Easily launch live assignments, quizzes, and <br /> tests.
                  Student results are automatically entered in <br /> the online gradebook.</p>

              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div className={css.df8520}>
              <div class={css.text_section}>
                <h1>
                  <span class={css.highlight}>Class Management Tools</span>   for Educators
                </h1>
                <p>
                  Class provides tools to help run and manage the class <br /> such as Class Roster, Attendance, and more. With the <br /> Gradebook, teachers can review and <br /> grade tests and quizzes in real-time.

                </p>

              </div>
              <div class={css.image_section}>
                <img src="./o.png" alt="" />

              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div className={css.df8520}>
              <div class={css.image_section}>
                <img src="./p.png" alt="" />
                <div class={css.play_button}><i class="fa-solid fa-play"></i></div>
              </div>
              <div class={css.text_section}>
                <h1>
                  One-on-One  <span class={css.highlight}>Discussions</span>
                </h1>
                <p> Teachers and teacher assistants can talk with <br /> students privately without leaving the Zoom <br /> environment.</p>

              </div>
            </div>
          </div>
        </section>

        <footer>
          .
        </footer>
      </main>
    </div>
  )
}

export default Main
