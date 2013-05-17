require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'
include Capybara::DSL
Capybara.run_server = false
Capybara.current_driver = Capybara.javascript_driver = :poltergeist
#Capybara.current_driver = :selenium
Capybara.app_host = "http://dev.js.com/ice/src/"
