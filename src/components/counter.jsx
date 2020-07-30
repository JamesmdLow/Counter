import React, {Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageURL: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"],
    };
    // constructor() {
    //   super();
    //   this.handleIncrement = this.handleIncrement.bind(this);
    // }
    //resets the handle increment with the bind constructor method

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };
    //arrow function is quicker
    //bind method or arrow method needed make the handler work
    //obj.method();
    //fucntion ();
    renderTags() {
        if (this.state.tags.length === 0) return <p> there are no tags!</p>;
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };

    render() {
        return (
            <div>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                <img src={this.state.imageURL} alt=""/>
                <span style={{fontSize: 30}} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
                <button
                    onClick={this.handleIncrement}
                    style={this.styles}
                    className="btn btn=secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge";
        classes +=
            this.state.count === 0 ? "badge badge-warning" : "badge badge-primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
//bootstrap doc with classes, badge-prim is a type of format, m-2 is the space.
//added a image on website
//refraction method to cut shorten a function
