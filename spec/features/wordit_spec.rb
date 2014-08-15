require 'rails_helper'
require 'capybara/rails'

feature 'WordIt' do
  before :each do
    visit "/"
  end

  scenario 'User can see a form input with a button' do
    expect(page).to have_content("WordIt")
    expect(page).to have_content("Create Bookmark!")
  end

end