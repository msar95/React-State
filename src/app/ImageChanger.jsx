import React from "react";


const getNextIndex = (images, currentIndex) => {
 
    if(currentIndex === images.length - 1 ){
        return 0;
    }
    return currentIndex + 1;
}

export class ImageChanger extends React.Component {
    constructor(props){
        super(props);
        this.state = { imageIndex: 0 };
    }
    
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.changeImage();
         }, this.props.interval)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    changeImage(){
        this.setState((state, props) => {
            return{
                imageIndex: getNextIndex(props.images, state.imageIndex)
            }
        }
        )
    }

    render() {
        const currentimage = this.props.images[this.state.imageIndex];
        return (
            <img src={currentimage.src} alt={currentimage.alt}></img>
        );
    }
}