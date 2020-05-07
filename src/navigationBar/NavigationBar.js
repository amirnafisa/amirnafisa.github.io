class NavigationBar extends React.Component {

    selectHome() {
        this.props.select(1);
    }

    selectProjects() {
        this.props.select(2);
    }

    selectResume() {
        this.props.select(3);
    }

    selectContact() {
        this.props.select(4)
    }

    render () {
        return (
            <table className="valign-middle child-el">
                <tbody>
                <tr>
                    <td id="title">Nafisa Ali Amir</td>
                    <td id="nav" className="text-right">
                        <ul className={this.props.selection===1?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectHome.bind(this)}>Home</ul>
                        <ul className={this.props.selection===2?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectProjects.bind(this)}>Projects</ul>
                        <ul className={this.props.selection===3?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectResume.bind(this)}>Resume</ul>
                        <ul className={this.props.selection===4?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectContact.bind(this)}>Contact</ul>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}