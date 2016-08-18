class ContactController < ApplicationController
	skip_before_filter  :verify_authenticity_token
	
	def sendEmail
		information = request.raw_post
		data_parsed = JSON.parse(information)
		@contact = Contact.new(data_parsed)
		ContactMailer.sample_email(@contact).deliver_now
		render :json => '{"message": "success"}'
	end
end
