class Projects extends React.Component {
    render () {
        return(
            <div className="padding-top2 text-center" ref={this.props.ref}>
                <h2>Projects</h2>
                <div className="card-deck" id="cards">
                    <Project cardImage="images/parser.png"
                             cardTitle="Earley Parser"
                             cardBody="This Project is about something I did in the past."
                             cardContent="asdf
                                asdfasdfasdfasdfa
                                asdfasdfasdfqwerwe qweqwe rqwer qwerqwe rqwer qwer
                                qwe rqwer qwr q weqewrqwerwer werq wer werq werq wer qwer qwer qwer qwer wer qwer wqrwe  wwqer qwer qwer qwer qwer q
                                    qwerqwer"
                             cardCompleted="December 2018"
                             cardLanguage="Python"
                             cardDomain="Natural Language Processing"
                             demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                             gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                    <Project cardImage="images/decon.png"
                             cardTitle="Decon"
                             cardBody="This Project is about something I did in the past."
                             cardContent="asdf
                                asdfasdfasdfasdfa
                                asdfasdfasdfqwerwe qweqwe rqwer qwerqwe rqwer qwer
                                qwe rqwer qwr q weqewrqwerwer werq wer werq werq wer qwer qwer qwer qwer wer qwer wqrwe  wwqer qwer qwer qwer qwer q
                                    qwerqwer"
                             cardCompleted="May 2020"
                             cardLanguage="Python"
                             cardDomain="Robotics, Healthcare Associated Infection, Object Detection"
                             demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                             gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                    <Project cardImage="images/timetravel.png"
                             cardTitle="Time Travel"
                             cardBody="This Project is about something I did in the past."
                             cardContent="asdf
                                asdfasdfasdfasdfa
                                asdfasdfasdfqwerwe qweqwe rqwer qwerqwe rqwer qwer
                                qwe rqwer qwr q weqewrqwerwer werq wer werq werq wer qwer qwer qwer qwer wer qwer wqrwe  wwqer qwer qwer qwer qwer q
                                    qwerqwer"
                             cardCompleted="December 2019"
                             cardLanguage="Java, Javascript, Html, Css"
                             cardDomain="Object Oriented Software, Web Application"
                             demoLink="/amirnafisa.github.io/timetravel.html"
                             gitHubLink="https://github.com/amirnafisa/time-travel-for-oose"/>
                    <Project cardImage="images/parser.png"
                             cardTitle="Inception"
                             cardBody="This Project is about something I did in the past."
                             cardContent="asdf
                                asdfasdfasdfasdfa
                                asdfasdfasdfqwerwe qweqwe rqwer qwerqwe rqwer qwer
                                qwe rqwer qwr q weqewrqwerwer werq wer werq werq wer qwer qwer qwer qwer wer qwer wqrwe  wwqer qwer qwer qwer qwer q
                                    qwerqwer"
                             cardCompleted="December 2018"
                             cardLanguage="Python"
                             cardDomain="Deep Neural Networks, Food Image Detection"
                             demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                             gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                </div>
            </div>
        );
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (

            <div className="text-center">
                <h3>{this.props.cardTitle}</h3>
                <table>
                    <tbody>
                    <tr>
                        <td className="vert-align-top font-small">
                            <img src={this.props.cardImage} alt="Card image cap" width="200px" className="border cursor-pointer"/>
                            <p className="align-left italics pre-wrap">
                                <b>Completed:</b>
                                {this.props.cardCompleted}
                            <br/>
                                <b>Programming Language:</b>
                                {this.props.cardLanguage}
                            <br/>
                                <b>Domain:</b>
                                {this.props.cardDomain}
                            </p>
                        </td>
                        <td className="vert-align-top">
                            <div id="nav-content">
                                {this.props.cardBody}<br/>
                                {this.props.cardContent}<br/><br/>
                                <a href={this.props.demoLink} className="left">
                                    Demo
                                </a>{" "}
                                <a href={this.props.gitHubLink} className="left">
                                    Source Code
                                </a>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}