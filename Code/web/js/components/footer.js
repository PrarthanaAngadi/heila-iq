/**
 * Created by vineet on 8/6/2016.
 */

var Footer = React.createClass({

    getInitialState: function(){
        return {
            con: <div>test</div>
        }
    },

    getDefaultProps: function(){
        return {
            content: <div>test</div>
        }
    },

    componentWillMount: function(){
        var page = $("#page-info").val();
        switch(page) {

            /* Footer content for Home Page */
            case "0":
                this.props.content = (
                    <div className="col-md-8 col-sm-12">
                        <header>
                            <h3>About Us</h3>
                        </header>
                        <section>
                            <p>The Heila IQ was designed by MIT students and alumni with expertise on microgrids, control, computer science, and machine learning to make building and managing microgrids easier.</p>
                        </section>
                    </div>
                );
                break;

            /* Footer content for About Page */
            case "1":
                this.props.content = (
                    <div className="col-md-8 col-sm-12">
                        <header>
                            <h3>Contact Us</h3>
                        </header>
                        <section>
                            <p>If you are interested in joining the team, please <a href="#">reach out to us</a>. We are particularly interested in people with backgrounds in control algorithms, systems integration, data analytics / machine learning.</p>
                        </section>
                    </div>
                );
                break;

            /* Footer content for Media Page */
            case "2":
                break;

            /* Footer content for Contact Us Page */
            case "3":
                break;
        }
    },

    render: function() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.props.content}
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