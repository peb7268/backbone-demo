require_relative 'spec_helper.rb'

describe 'Testing Pages Have correct markup' do 
	it 'Testing intro page' do
		visit '/'
		page.should have_content('Get Paid for Having FUN!!')
	end

	it 'Testing categories page' do
		visit '/#categories'
		page.should have_content('Topic Categories')
	end

	it 'Testing background page' do
		visit '/#background'
		page.should have_content('Background')
	end

	it 'Testing pages can navigate' do
		visit '/'
		page.should have_content('Get Paid for Having FUN!!')
		
		click_link 'Next'
		page.should have_content('Topic Categories')
		page.should have_content('Current Events')
		
		click_link 'Next'
		page.should have_content('Background')
	end
end