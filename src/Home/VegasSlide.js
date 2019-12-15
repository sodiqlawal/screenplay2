import React,{Component} from 'react'
import $ from "jquery";


class VegasSlide extends Component {
constructor(props) {
    super(props)
}

check = () => {
    $(".example").vegas({
        delay: 6000,
        slides: [
            { src: "../images/iroko.jpg" },
            { src: "../images/ibaka.png" },
        ]
    });
}
componentDidMount(){
    this.check()
}

    render() {

    return (
        <React.Fragment>
            <div className="example"></div>
        </React.Fragment>
    )
}
}


export default VegasSlide