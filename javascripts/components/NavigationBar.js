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
            <table>
                <tbody>
                <tr>
                    <td id="title">Nafisa Ali Amir</td>
                    <td id="subtitle" className={this.props.selection===1?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectHome.bind(this)}>Home</td>
                    <td id="subtitle" className={this.props.selection===2?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectProjects.bind(this)}>Projects</td>
                    <td id="subtitle" className={this.props.selection===3?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectResume.bind(this)}>Resume</td>
                    <td id="subtitle" className={this.props.selection===4?"selected-color cursor-pointer":"cursor-pointer"} onClick={this.selectContact.bind(this)}>Contact</td>
                </tr>
                </tbody>
            </table>
        );
    }
}