class UsersController < ApplicationController
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
	#require 'digest/md5'

	def index
		@users = User.where(status: 'active').all
		respond_to do |format|
		format.html
		format.json {render :json => {:users => @users}}
		end
	end

	def show
		@user = User.find(params[:id])
		#@usersAll = User.where(status: 'active').all
		respond_to do |format|
		format.html
		format.json {render :json => {:user => @user}}
		end
	end

	def new
		@user = User.new
	end

	def create
		information = request.raw_post
		data_parsed = JSON.parse(information)
		userExists = User.where(email: data_parsed["email"],status: 'active').all

		if userExists.empty? 
			@user = User.new(data_parsed)
			@user.status = "active"
			if @user.save
				render :json => '{"message": "success"}'
			else
				render :json => '{"message": "failure"}'
			end
		else
			render :json => '{"message": "User already exits"}'
		end
	end

	def update
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.find(params[:id])
		if @user.update(data_parsed)
			render :json => '{"message": "success"}'
		else
			render :json => '{"message": "failure"}'
		end
	end

	def loginCheck
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.where(email: data_parsed["email"], password: data_parsed["password"]).all
		if !@user.empty?
			@usersAll = User.where(status: 'active').all
			respond_to do |format|
			format.html
			format.json  { render :json => {:user => @user, 
                                  :userList => @usersAll }}			
            end
		else
			render :json => '{"message": "failure"}'
		end
	end

	#def destroy
	#	@user = User.find(params[:id])
	#	@user.status = "inactive"
	#	if @user.save
	#		render :json => '{message: "success"}'
	#	else
	#		render :json => '{message: "failure"}'
	#	end
	#end


end
