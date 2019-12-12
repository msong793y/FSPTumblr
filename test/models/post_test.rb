# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :text
#  hashtags   :string
#  private    :boolean          default("false"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  op_name    :string           default("null")
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
