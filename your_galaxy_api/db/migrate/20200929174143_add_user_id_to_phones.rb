class AddUserIdToPhones < ActiveRecord::Migration[6.0]
  def change
    add_column :phones, :user_id, :integer
  end
end
