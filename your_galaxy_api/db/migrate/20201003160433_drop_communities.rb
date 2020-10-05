class DropCommunities < ActiveRecord::Migration[6.0]
  def change
    drop_table :communities
  end
end
