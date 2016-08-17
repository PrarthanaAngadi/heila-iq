class ContactController < ApplicationController
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
	
	def sendEmail
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@contact = Contact.new(data_parsed)
		ContactMailer.sample_email(@contact).deliver_now
	end
end
