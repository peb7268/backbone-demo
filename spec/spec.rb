require_relative 'spec_helper.rb'

describe '1 should equal 1' do 
	it 'testing the testing' do
		visit '/'
		page.should have_content('Get Paid for Having FUN!!')
		click_link 'Next'
		page.should have_content('Topic Categories')
		click_link 'Next'
		page.should have_content('Background')
	end
end