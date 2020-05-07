class HomePage extends React.Component {
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

            let refCurrentOffset = this[`ref${selection}`].current.getBoundingClientRect().top;
            let windowOffset = window.pageYOffset;
            let stickyBarOffset = 70; //for 16px body font size, 5em (height of the sticky bar) + 3em = 128px
            //4vh + 3vh = 7vh
            window.scrollTo({top: refCurrentOffset + windowOffset - stickyBarOffset, behavior: "smooth"});
        }
    }

    render() {
        return (
            <div>
                <div id="bar-sticky">
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

ReactDOM.render(<HomePage/>, document.querySelector("#application"));

