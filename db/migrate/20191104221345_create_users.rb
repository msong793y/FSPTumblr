class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "username", null:false
      t.string "email", null: false
      t.string "password_digest", null: false
      t.string "session_token", null: false, unique: true
      t.timestamps

      t.index ["email"], name: "index_users_on_email", unique: true
      t.index ["username"], name: "index_users_on_username", unique: true
    end
  end
end
