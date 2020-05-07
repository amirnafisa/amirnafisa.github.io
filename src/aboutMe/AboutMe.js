class AboutMe extends React.Component {
    render () {
        return(
            <div id="aboutme" ref={this.props.ref}>
                <div id="aboutme-content">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <div id="nav-content">
                                    I am a recent graduate in computer science from Johns Hopkins University. I use neural
                                    networks to detect objects in visual streams. I sometimes use them to teach grammar to
                                    machines. I also enjoy building web applications.
                                    <br/>
                                    <br/>
                                    Check out some of my recent projects.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-top">
                                <img id="bio-pic" src="images/Bio3.jpg" alt="Bio Pic" width="150vw" className="cursor-pointer rounded-circle"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}