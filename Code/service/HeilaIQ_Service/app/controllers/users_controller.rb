class UsersController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	respond_to :json

	def index
		@users = User.where(status: 'active').all
		respond_to do |format|
		format.html
		format.json {render json: @users}
		end
	end

	def show
		@user = User.find(params[:id])
		respond_to do |format|
		format.html
		format.json {render json: @user}
		end
	end

	def new
		@user = User.new
	end

	def create
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.new(data_parsed)
		@user.status = "active"
		if @user.save
			render :json => '{message: "success"}'
		else
			render :json => '{message: "failure"}'
		end
	end

	def update
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.find(params[:id])
		if @user.update(data_parsed)
			render :json => '{message: "success"}'
		else
			render :json => '{message: "failure"}'
		end
	end

	def loginCheck
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.where(email: data_parsed["email"], password: data_parsed["password"]).all
		respond_to do |format|
		format.html
		format.json {render json: @user}
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
