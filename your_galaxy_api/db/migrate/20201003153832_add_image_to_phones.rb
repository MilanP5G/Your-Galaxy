class AddImageToPhones < ActiveRecord::Migration[6.0]
  def change
    add_column :phones, :image, :string
  end
end
