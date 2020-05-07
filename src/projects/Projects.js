class Projects extends React.Component {
    render () {
        return(
            <div id="projects" ref={this.props.ref}>
                <h2>Projects</h2>
                <div id="projects-content">
                    <div className="row">
                        <div className="col-4">
                            <Project cardImage="images/parser.png"
                                     cardTitle="Earley Parser"
                                     cardBody="A demonstration of the famous Earley's parser modified with pruning strategies for speed up"
                                     cardCompleted="August 2018 - December 2018"
                                     cardLanguage="Python"
                                     cardDomain="Natural Language Processing"
                                     demoLink="https://earley-parser-by-nafisa.herokuapp.com"
                                     gitHubLink="https://github.com/amirnafisa/EarleyParser"/>
                        </div>
                        <div className="col-4">
                            <Project cardImage="images/decon.png"
                                     cardTitle="Decon"
                                     cardBody="An autonomous solution for disinfecting healthcare facilities in human and non-human presence"
                                     cardCompleted="August 2019 - May 2020"
                                     cardLanguage="Python"
                                     cardDomain="Robotics, Healthcare Associated Infection, Object Detection"
                                     gitHubLink="https://github.com/amirnafisa/Decon"/>
                        </div>
                        <div className="col-4">
                            <Project cardImage="images/timetravel.png"
                                     cardTitle="Time Travel"
                                     cardBody="A web application for organizing travel itineraries and detecting discrepancies in travel plans"
                                     cardCompleted="August 2019 - Dec 2019"
                                     cardLanguage="Java, Javascript, Html, Css"
                                     cardDomain="Object Oriented Software, Web Application"
                                     gitHubLink="https://github.com/amirnafisa/time-travel-for-oose"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Project cardImage="images/legalIR.png"
                                     cardTitle="Legal IR"
                                     cardBody="Implementation and comparision of various architectures for catchphrase extraction from legal documents"
                                     cardCompleted="January 2019 - May 2019"
                                     cardLanguage="Python"
                                     cardDomain="Natural Language Processing, Information Retrieval"
                                     gitHubLink="https://github.com/amirnafisa/InformationRetrieval"/>
                        </div>
                        <div className="col-4">
                            <Project cardImage="images/foodNN.png"
                                     cardTitle="Food NN"
                                     cardBody="A Resnet-152 and Inception-v3 ensembled model for food image classification"
                                     cardCompleted="August 2018 - December 2018"
                                     cardLanguage="Python"
                                     cardDomain="Deep Neural Networks, Food Image Detection"
                                     gitHubLink="https://github.com/amirnafisa/Food101"/>
                        </div>
                        <div className="col-4">
                            <Project cardImage="images/influenza_sm.png"
                                     cardTitle="Influenza"
                                     cardBody="Desktop tool for data analysis of influenza simulations"
                                     cardCompleted="January 2019 - May 2019"
                                     cardLanguage="C, C++"
                                     cardDomain="Parallel programming, Application Design"
                                     gitHubLink="https://github.com/amirnafisa/Influenza"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Project cardImage="images/cps-soa.png"
                                     cardTitle="Low Cost Telemedicinal Solution"
                                     cardBody="A cyber physical system with service oriented architecture for healthcare applications"
                                     cardCompleted="June 2011 - May 2012"
                                     cardLanguage="C, C++, Sql"
                                     cardDomain="Embedded Systems, Firmware, PCB Design"/>
                        </div>
                    </div>
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
                <p>{this.props.cardBody}</p>
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