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
            <table className="sticky">
                <tbody>
                <tr>
                    <td className="title">Nafisa Ali Amir</td>
                    <td className={this.props.selection===1?"selected margin10 nav-menu":"margin10 nav-menu"} onClick={this.selectHome.bind(this)}>Home</td>
                    <td className={this.props.selection===2?"selected margin10 nav-menu":"margin10 nav-menu"} onClick={this.selectProjects.bind(this)}>Projects</td>
                    <td className={this.props.selection===3?"selected margin10 nav-menu":"margin10 nav-menu"} onClick={this.selectResume.bind(this)}>Resume</td>
                    <td className={this.props.selection===4?"selected margin10 nav-menu":"margin10 nav-menu"} onClick={this.selectContact.bind(this)}>Contact</td>
                </tr>
                </tbody>
            </table>
        );
    }
}