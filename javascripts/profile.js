class Application extends React.Component {
    _isMounted = true;

    constructor(props) {
        super(props);
        this.state = {selection:1};
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
    }

    componentDidMount() {
        this._isMounted = true;

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    select (selection) {
        this._isMounted && this.setState({selection:selection});
        if (this[`ref${selection}`].current) {
            this[`ref${selection}`].current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
            });
        }
    }

    render() {
        return (
            <div>
                <div className="sticky">
                    <NavigationBar selection={this.state.selection} select={this.select.bind(this)}/>
                </div>
                <div ref={this.ref1}>
                    <AboutMe/>
                </div>
                <div ref={this.ref2}>
                    <Projects/>
                </div>
                <div ref={this.ref3}>
                    <Resume/>
                </div>
                <div ref={this.ref4}>
                    <Contact/>
                </div>

            </div>
        );
    }
}

ReactDOM.render(<Application/>, document.querySelector("#application"));

