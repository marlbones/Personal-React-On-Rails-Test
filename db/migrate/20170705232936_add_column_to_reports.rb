class AddColumnToReports < ActiveRecord::Migration[5.0]
  def change
    add_column :reports, :content, :json
  end
end
