class UsersController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	respond_to :json

	def index
		@users = User.all
		respond_to do |format|
		format.html
		format.json {render json: @users}
		end
	end

	def show
		@user = User.all
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
		if @user.save
			render :json => '{message: "success"}'
		else
			render :json => '{message: "failure"}'
		end
	end

	def update
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.find(data_parsed[:id])
		if @user.update
			render :json => '{message: "success"}'
		else
			render :json => '{message: "failure"}'
		end
	end

	def destroy
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@user = User.find(data_parsed[:id])
		if @user.destroy
			render :json => '{message: "success"}'
		else
			render :json => '{message: "failure"}'
		end
	end


end
