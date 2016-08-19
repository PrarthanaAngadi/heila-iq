class JobsController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	respond_to :json
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

	  end
	end

	def index
		@jobs = Job.where(status: 'active').all
		respond_to do |format|
		format.html
		format.json  { render :json => {:jobs => @jobs } }	
		end
	end

	def create
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@job = Job.new(data_parsed)
		@job.status = "active"
		if @job.save
			render :json => '{"message": "success"}'
		else
			render :json => '{"message": "failure"}'
		end
	end

	def destroy
		@job = Job.find(params[:id])
		@job.status = "inactive"
		if @job.update
			render :json => '{"message": "success"}'
		else
			render :json => '{"message": "failure"}'
		end
	end

end
