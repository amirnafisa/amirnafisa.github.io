class Resume extends React.Component {
    render () {
        return(
            <div className="padding2 text-center" ref={this.props.ref}>
                <h2>Resume</h2>
                <object data="resources/NafisaResume.pdf" type="application/pdf" width="600px" height="900px">
                    <a href="resources/NafisaResume.pdf">Resume</a>
                </object>
            </div>
        );
    }
}