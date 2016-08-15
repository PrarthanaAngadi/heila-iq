class ContactMailer < ApplicationMailer
	default from: "api.java.project@gmail.com"

	def sample_email(contact)
    @contact = contact
    mail(to: @contact.email, subject: 'Customer Query')
  end
end
