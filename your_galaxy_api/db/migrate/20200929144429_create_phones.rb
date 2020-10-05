class CreatePhones < ActiveRecord::Migration[6.0]
  def change
    create_table :phones do |t|
      t.string :title
      t.string :image
      t.string :pros
      t.string :cons

      t.timestamps
    end
  end
end
