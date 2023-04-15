import React from 'react';

class Profile extends React.Component{

    constructor(props){
        super(props);


    };

    /*
    calling step
        constructor
        render

        ComponentDidMount

        render
        ComponentDidUpdate

        After Exit
        ComponentWillUnmount
    */
    componentDidMount(){
        // State Variablr
    }
    componentDidUpdate(prevProps, prevState){

        //  Call Api 
    }
    componentWillUnmount(){
        // Clear Your mess 
    }

    render(){
        return(
            <>
            <h1>Profile</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptate aliquam eum laudantium quis eius dolor odit quod, provident harum.</p>
            </>
        );
    }
}

export default Profile;