class Contact extends React.Component {
    render () {
        return(
            <div className="padding-top2 text-center margin-bottom" ref={this.props.ref}>
                <h2>Contact</h2>
                    <a id="contact-links" href="https://www.linkedin.com/in/amirnafisa/">
                        <img src="images/LinkedIn.svg" alt="LinkedIn Icon" width="60px"/>
                    </a>

                    <a id="contact-links" href="https://github.com/amirnafisa">
                        <img src="images/GitHub.png" alt="GitHub Icon" width="60px"/>
                    </a>

                    <a id="contact-links" href="mailto:amirnafisa@gmail.com">
                        <img src="images/Gmail.png" alt="Gmail Icon" width="60px"/>
                    </a>
            </div>
        );
    }
}