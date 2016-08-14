var Menu = React.createClass({

	getInitialState: function(){
		return {
			linkItems: []
		}
	},

	componentWillMount: function() {
		if(this.props.items){
			var items = this.props.items.split(",");
			var anchorList = [];
			$.each(items, function(i, elem){
				var anchorElem = elem.trim().split(":");
				var obj = {"title":anchorElem[0], "link":anchorElem[1]};
				anchorList.push(obj);
			})
			this.setState({linkItems: anchorList});
		}
	},

	render: function(){
		return (
			<nav className="navbar navbar-default" role="navigation">
		        <div className="container">
		          <div className="navbar-header">
			          {
			          	this.state.linkItems.map(function(item, i){
			          		if(i == 0){
			          			return (
			          				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
						              	<span className="sr-only">Toggle navigation</span>
						                <span className="icon-bar"></span>
						                <span className="icon-bar"></span>
						                <span className="icon-bar"></span>
					                </button>
			          			);
			          		}
			          	})
			          }   
		              <a className="navbar-brand" href={"index.html"}><img src={"images/logo.png"}/></a>
		          </div> 
		          <div className="collapse navbar-collapse" id="main-menu">
		            <ul className="nav navbar-nav navbar-right">
		              {
		              	this.state.linkItems.map(function(item, i){
		              		return (
		              			<MenuItem link={item.link} title={item.title} />
		              		);
		              	})
		              }
		            </ul>
		          </div>
		        </div>
		    </nav>
		);
	},

	componentDidMount: function(){
		var page = $("#page-info").val();
		$("ul.nav li a:eq(" + page + ")").addClass("selected");
        $(".navbar").affix();
	}
});

var MenuItem = React.createClass({
	render: function(){
		return (
			<li><a href={this.props.link}>{this.props.title}</a></li>
		);
	}
})

ReactDOM.render(<Menu items="Home:index.html, About:about.html, Media:#, Contact Us:# "/>, $("body > header")[0]);

