import React from "react";
import HeaderHome from "../components/HeaderHome";
// import { test } from "../components/js/script";
// import $ from "jquery";

class Home extends React.Component {
    render(){
    
        // $(document).ready(function () {
        //   setTimeout(function () { test(); });
        // });
        // $(window).on('resize', function () {
        //   setTimeout(function () { test(); }, 500);
        // });
        // $(".navbar-toggler").click(function () {
        //   setTimeout(function () { test(); });
        // });

        return(
            <HeaderHome/>
        );
    }
}

export default Home;