class User < ActiveRecord::Base
	has_many :blogs
	has_many :jobs
	has_many :userlogs
end
