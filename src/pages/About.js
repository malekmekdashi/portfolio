export default function About() {
    return <h1><section>
    <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
    </div>
    <div className="center">
        <img
            src={require('../assets/me-irl.png')}
            alt="about-me"
            className="photo"
        />
    </div>
    <div>
        <p>
        Currently working at Bank of America, I am an aspiring web developer looking to master the art of coding. As hard as it may sound, if someone has a passion for something, that makes the journey much more enjoyable. I am currently attending a coding bootcamp at UCI and looking forward to join my fellow coders once it is completed.
        </p>
    </div>
</section></h1>
}