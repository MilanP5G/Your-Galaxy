class RemoveImageFromPhones < ActiveRecord::Migration[6.0]
  def change
    remove_column :phones, :image, :string
  end
end
