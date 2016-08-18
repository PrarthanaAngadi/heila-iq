class BlogsController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	respond_to :json
	#test for cross domain
	before_filter :cors_preflight_check
	after_filter :cors_set_access_control_headers

	def cors_set_access_control_headers
	  headers['Access-Control-Allow-Origin'] = '*'
	  headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
	  headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
	  headers['Access-Control-Max-Age'] = "1728000"
	end

	def cors_preflight_check
	  if request.method == 'OPTIONS'
	    headers['Access-Control-Allow-Origin'] = '*'
	    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
	    headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, Token'
	    headers['Access-Control-Max-Age'] = '1728000'

	    #render :text => '', :content_type => 'text/plain'
	  end
	end
	#end test cross domain

	def index
		@blogs = Blog.select("blogs.*, users.*").joins(:user)
		respond_to do |format|
		format.html
		format.json {render :json => {:blogs => @blogs }}	
		end
	end

	def create
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@blog = Blog.new(data_parsed)
		@blog.status = "active"
		if @blog.save
			render :json => '{"message": "success"}'
		else
			render :json => '{"message": "failure"}'
		end
	end

	def destroy
		@blog = Blog.find(params[:id])
		@blog.status = "inactive"
		if @blog.update
			render :json => '{"message": "success"}'
		else
			render :json => '{"message": "failure"}'
		end
	end

end
