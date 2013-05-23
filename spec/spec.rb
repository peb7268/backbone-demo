require_relative 'spec_helper.rb'

describe 'Testing Pages Have correct markup' do 
	it 'Testing pages can navigate' do
		visit '/'
		page.should have_content('Get Paid for Having FUN!!')
		
		click_link 'Next'
		page.should have_content('Topic Categories')
		page.should have_content('Current Events')
		page.check('U.S. Politics')
		page.check('Foreign Affairs')

		click_link 'Next'
		page.should have_content('Background')
	end
	
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

	it 'Test that the category page can advance when you click the correct screener questions' do
		visit '/#categories'
		page.should have_content('Topic Categories')
		page.should have_content('Current Events')
		page.check('U.S. Politics')
		page.check('Foreign Affairs')
	end

	it 'Test that the category page does not advance if you dont fufill the screener criteria' do
		visit '/#categories'
		page.check('Current Events')
		page.check('Food & Drinking')

		click_link 'Next'
		page.should_not have_content('Background')
	end
end