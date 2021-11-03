class ApplicationController < ActionController::Base

	def hello
		render html: "of those who seek, the most patient are rewarded."
	end
end
