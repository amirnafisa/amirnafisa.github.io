class Projects extends React.Component {
    render () {
        return(
            <div className="padding2 text-center" ref={this.props.ref}>
                <h2>Projects</h2>
                <div className="card-deck" id="cards">
                    <Project cardImage="images/parser.png"
                             cardTitle="Earley Parser"
                             cardBody="This Project is about something I did in the past."
                             demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                             gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                    <Project cardImage="images/parser.png"
                             cardTitle="Decon"
                             cardBody="This Project is about something I did in the past."
                             demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                             gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                    <Project cardImage="images/parser.png"
                             cardTitle="Time Travel"
                             cardBody="This Project is about something I did in the past."
                             demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                             gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                    <Project cardImage="images/parser.png"
                             cardTitle="Inception"
                             cardBody="This Project is about something I did in the past."
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
                        <td className="vert-align-top">
                            <img src={this.props.cardImage} alt="Card image cap" width="200px" className="border"/>
                        </td>
                        <td className="vert-align-top">
                            <div className="nav-content">
                                {this.props.cardBody}<br/>asdf
                                asdfasdfasdfasdfa
                                asdfasdfasdfqwerwe qweqwe rqwer qwerqwe rqwer qwer
                                qwe rqwer qwr q weqewrqwerwer werq wer werq werq wer qwer qwer qwer qwer wer qwer wqrwe  wwqer qwer qwer qwer qwer q
                                    qwerqwer<br/><br/>
                                <a href={this.props.demoLink} className="left">
                                    Demo
                                </a>{" "}
                                <a href={this.props.gitHubLink} className="left">
                                    Source Code
                                </a>
                            </div>
                        </td>

                        <td className="align-left vert-align-top">
                                Completed:
                                December 2018
                            <br/>
                                Programming Language:
                                Python
                            <br/>
                                Domain:
                                Natural Language Processing
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}