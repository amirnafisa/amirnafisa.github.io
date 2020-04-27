class Projects extends React.Component {
    render () {
        return(
            <div id="projects" ref={this.props.ref}>
                <h2>Projects</h2>
                <div id="projects-content">
                    <table>
                        <tr>
                            <td>
                                <Project cardImage="images/parser.png"
                                         cardTitle="Earley Parser"
                                         cardBody="This is a demonstration of the famous Earley's parser.

Algorithmic complexity of the algorithm is O(R<sup>2</sup>N<sup>3</sup>),
where R is the number of rules and N is the number of words (including
punctuation literals as unit components). Few pruning strategies are incorporated
to speed up the parser. "
                                         cardCompleted="August 2018 - December 2018"
                                         cardLanguage="Python"
                                         cardDomain="Natural Language Processing"
                                         demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                                         gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                            </td>
                            <td>
                                <Project cardImage="images/decon.png"
                                         cardTitle="Decon"
                                         cardBody="It is an APL sponsored project to tackle healthcare associated infections. This projects
aims to provide an autonomous solution for disinfecting healthcare facilities in human and non-human
presence."
                                         cardCompleted="August 2019 - May 2020"
                                         cardLanguage="Python"
                                         cardDomain="Robotics, Healthcare Associated Infection, Object Detection"
                                         gitHubLink="https://github.com/amirnafisa/Decon"/>
                            </td>
                            <td>
                                <Project cardImage="images/timetravel.png"
                                         cardTitle="Time Travel"
                                         cardBody="It is a web application based on client-server architecture for
organizing travel itineraries and detecting discrepancies in travel plans."
                                         cardCompleted="August 2019 - Dec 2019"
                                         cardLanguage="Java, Javascript, Html, Css"
                                         cardDomain="Object Oriented Software, Web Application"
                                         gitHubLink="https://github.com/amirnafisa/time-travel-for-oose"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Project cardImage="images/legalIR.png"
                                         cardTitle="Legal IR"
                                         cardBody="This project aims to use and compare various architectures for catchphrase extraction
from legal documents. Legal documents provide a large text base with technical vocabulary
specific to the legal domain. This is taken to the advantage of comparing vector based models,
conditional random fields based models, recurrent neural network based models and long short
term memory networks."
                                         cardCompleted="January 2019 - May 2019"
                                         cardLanguage="Python"
                                         cardDomain="Natural Language Processing, Information Retrieval"
                                         gitHubLink="https://github.com/amirnafisa/InformationRetrieval"/>
                            </td>
                            <td>
                                <Project cardImage="images/foodNN.png"
                                         cardTitle="Food NN"
                                         cardBody="Food NN is a neural network based project for food image classification.
It aims to fine tune and ensemble deep neural network architectures in
resource constrained environment."
                                         cardCompleted="August 2018 - December 2018"
                                         cardLanguage="Python"
                                         cardDomain="Deep Neural Networks, Food Image Detection"
                                         gitHubLink="https://github.com/amirnafisa/Food101"/>
                            </td>
                            <td>
                                <Project cardImage="images/influenza_sm.png"
                                         cardTitle="Influenza"
                                         cardBody="Data analysis from influenza simulations"
                                         cardCompleted="January 2019 - May 2019"
                                         cardLanguage="C, C++"
                                         cardDomain="Parallel programming, Application Design"
                                         gitHubLink="https://github.com/amirnafisa/Influenza"/>
                            </td>
                        </tr>
                    </table>
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
            <div id="project">
                <h4>{this.props.cardTitle}</h4>
                <img src={this.props.cardImage} alt={this.props.cardTitle}/>
                <p><b>Domain:</b> {this.props.cardDomain}</p>
                <p><b>Language:</b> {this.props.cardLanguage}</p>
                <p>
                    {this.props.demoLink != null?
                        <a className="left" href={this.props.demoLink}>Demo</a>:
                        <a></a>}
                    {this.props.gitHubLink != null?
                        <a className="right" href={this.props.gitHubLink}>Code</a>:
                        <a></a>}
                    </p>
            </div>
        );
    }
}