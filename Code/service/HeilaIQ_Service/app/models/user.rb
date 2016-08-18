class User < ActiveRecord::Base
	has_many :blogs
	has_many :jobs
end
