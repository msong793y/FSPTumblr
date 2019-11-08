class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer "author_id", null:false
      t.text "body"
      t.string "hashtags"
      t.boolean "private", null:false, default:false
      t.timestamps

    end
    add_index :posts,:author_id
    add_index :posts, :hashtags
   

  end
end
