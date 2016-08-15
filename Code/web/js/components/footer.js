/**
 * Created by vineet on 8/6/2016.
 */

var Footer = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <header>
                                <h3>About Us</h3>
                            </header>
                            <section>
                                <p>The Heila IQ was designed by MIT students and alumni with expertise on microgrids, control, computer science, and machine learning to make building and managing microgrids easier.</p>
                            </section>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="row">
                                <div className="col-md-2 col-md-offset-4 col-sm-3 col-sm-offset-3 col-xs-6 social-icons">
                                    <a href={"https://twitter.com/heilatech"} target="_blank" className="btn btn-social-icon btn-lg btn-twitter"><span className="fa fa-twitter"></span></a>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-6 social-icons">
                                    <a className="btn btn-social-icon btn-lg btn-linkedin"><span className="fa fa-linkedin"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Copyright />
            </div>
        );
    }
});

var Copyright = React.createClass({
    render: function() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12 pull-right">
                            <a href={"#"}>Privacy</a>
                            <a href={"#"}>Legal</a>
                            <a href={"#"}>Terms</a>
                        </div>
                        <div className="col-sm-6 col-xs-12 pull-left">&copy; 2016 Heila Technologies</div>
                    </div>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<Footer />, $("body > footer")[0]);