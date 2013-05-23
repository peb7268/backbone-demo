require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.app_host = "http://dev.js.com/ice/src/" #sets the base URL for capybara visit 

headless = !!ENV['HEADLESS']
if headless
	Capybara.current_driver = Capybara.javascript_driver = :poltergeist
else
	Capybara.current_driver = :selenium
end

Capybara.automatic_reload

module RSpec
	module Core
		module DSL
			def xdescribe(*args, &blk)
				describe *args do
				#pending 
				end
			end

			alias xcontext xdescribe
		end
	end
end
