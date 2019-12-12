class AddOpNametoPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :op_name, :string, {default: :null}
  end
end
